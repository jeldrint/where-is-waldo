import React, { useState, useEffect } from 'react'
import Hard5 from '../images/hard-5.jpg'
import {db} from '../firebase'
import { doc, getDoc, setDoc } from "firebase/firestore";
import HighScore from './HighScore';

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
const time = await getDoc(doc(db,'coordinates','time'));

const Level5 = ({xCoor, yCoor, level, setLevel, setText, setTextColor, timer, setTimer}) => {
    const [stopTimer, setStopTimer] = useState(false)

    useEffect(()=>{
        setText('The final stage! Can you find the pencil amongst these books?');
        setTextColor('aliceblue')
        setTimer(time.data().time)

        return () => {
            setText('');
            setTextColor('');
            setTimer(0);
        }
    },[])

    useEffect(()=>{
        let intervalId;
        if(!stopTimer){
           intervalId = setInterval(() => setTimer(prev => prev + 1),1000);
        }

        return () => clearInterval(intervalId);
    },[stopTimer])

    const pictureClicked = async () => {
        let arr = []
        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture5
        }else{
            console.log('no documents found',)
        }

        if (level === 6) {
            window.location.href = `/`;
        }

        let wrongFlag = true;
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setText('Congratulations! You\'ve completed the game! Tallying your score.');
                setTextColor('yellow')
                setLevel(6);
                setStopTimer(true);
                HighScore(timer);
                wrongFlag = false;
                break;
            }
        }
        if(wrongFlag && level !== 6){
            setText('Wrong answer! 30 seconds added to your time! Please try again.');
            setTextColor('crimson')
            setTimer(prev => prev + 30);
            await setDoc(doc(db, 'coordinates', 'time'),{time: timer})
        }
    }

    return (
        <>
            <img className='hard-5-img' src={Hard5} onClick={pictureClicked} style={{cursor: 'pointer', width: '832px', height: '838px'}}/>
        </>
    )
}

export default Level5