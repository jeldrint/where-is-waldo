import React, { useEffect } from 'react'
import Easy1 from '../images/easy-1.webp'
import {db} from '../firebase'
import { doc, setDoc, getDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));

const Level1 = ({xCoor, yCoor, level, setLevel, setText, setTextColor, timer, setTimer}) => {

    useEffect(()=>{
        setText('Level 1: Can you find the wolf among the sheep?');
        setTextColor('aliceblue')
        console.log('how many')

        let intervalId = setInterval(() => setTimer(prev => prev + 1),1000);
        return () => clearInterval(intervalId);
    },[])

    const pictureClicked = async () => {
        console.log('how many click')
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

        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                console.log('right')
                setText('That\'s easy. Right? Click anywhere on the picture to proceed to the next level!');
                setTextColor('yellow')
                setLevel(2);
                break;
            }else{
                if (level !== 2){
                    console.log('wrong')
                    setText('Wrong answer! 15 seconds added to your time! Please try again.');
                    setTextColor('crimson')
                    setTimer(prev => prev + 5);    
                }
            }
        }


    }

    return (
        <>
            <img className='easy-1-img' src={Easy1} onClick={pictureClicked} style={{cursor: 'pointer', width: '838px', height: '838px'}}/>
        </>
    )
}

export default Level1