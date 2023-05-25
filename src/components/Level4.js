import React, {useEffect} from 'react'
import Hard4 from '../images/hard-4.jpeg'
import {db} from '../firebase'
import { doc, getDoc, setDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
const time = await getDoc(doc(db,'coordinates','time'));

const Level4 = ({xCoor, yCoor, level, setLevel, setText, setTextColor, timer, setTimer}) => {

    useEffect(()=>{
        setText('Can you spot the hidden bunny? I bet you can!');
        setTextColor('aliceblue')
        setTimer(time.data().time)

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
            arr = getCoordinates.data().picture4
        }else{
            console.log('no documents found',)
        }

        if (level === 5) {
            await setDoc(doc(db, 'coordinates', 'time'),{time: timer+2})
            window.location.href = `/${level}`;
        }

        let wrongFlag = true;
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setText('Wheew. How is it? Now for the last picture. Click to proceed!');
                setTextColor('yellow')
                setLevel(5);
                wrongFlag = false;
                break;
            }
        }

        if(wrongFlag && level !== 5){
            setText('Wrong answer! 30 seconds added to your time! Please try again.');
            setTextColor('crimson')
            setTimer(prev => prev + 30);
        }
        await setDoc(doc(db, 'coordinates', 'time'),{time: timer+2})
    }

    return (
        <>
            <img className='hard-4-img' src={Hard4} onClick={pictureClicked} style={{cursor: 'pointer', width: '838px', height: '838px'}}/>
        </>
    )
}

export default Level4