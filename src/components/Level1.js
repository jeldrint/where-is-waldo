import React, { useEffect } from 'react'
import Easy1 from '../images/easy-1.webp'
import {db} from '../firebase'
import { doc, setDoc, getDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));

const Level1 = ({xCoor, yCoor, level, setLevel, setText, setTextColor, timer, setTimer}) => {

    useEffect(()=>{
        setText('Level 1: Can you find the wolf among the sheep?');
        setTextColor('aliceblue')

        let intervalId = setInterval(() => setTimer(prev => prev + 1),1000);

        return () => {
            clearInterval(intervalId);
            setText('');
            setTextColor('');
            setTimer(0);
        }
    },[])

    const pictureClicked = async () => {
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture1
        }else{
            console.log('no documents found',)
        }

        if (level === 2) {
            await setDoc(doc(db, 'coordinates', 'time'),{time: timer+2})
            window.location.href = `/${level}`;
        }

        let wrongFlag = true;
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setText('That\'s easy. Right? Click anywhere on the picture to proceed to the next level!');
                setTextColor('yellow')
                setLevel(2);
                wrongFlag = false;
                break;
            }
        }
        if(wrongFlag && level !== 2){
            setText('Wrong answer! 30 seconds added to your time! Please try again.');
            setTextColor('crimson')
            setTimer(prev => prev + 30);
        }
        await setDoc(doc(db, 'coordinates', 'time'),{time: timer+2})
    }

    return (
        <>
            <img className='easy-1-img' src={Easy1} onClick={pictureClicked} style={{cursor: 'pointer', width: '838px', height: '838px'}}/>
        </>
    )
}

export default Level1