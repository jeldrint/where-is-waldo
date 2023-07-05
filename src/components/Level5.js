import React, { useState, useEffect } from 'react'
import Hard5 from '../images/hard-5.jpg'
import {db} from '../firebase'
import { doc, getDoc, setDoc } from "firebase/firestore";
import setScore from './02_setScore';

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
const time = await getDoc(doc(db,'coordinates','time'));

const Level5 = ({xCoor, yCoor, level, setLevel, setText, textColor, setTextColor, timer, setTimer}) => {
    const [isWrong, setIsWrong] = useState('');
    const [stopTimer, setStopTimer] = useState(false)

    useEffect(()=>{
        setTimer(time.data().time)

        return () => setTimer(0);
    },[])

    useEffect(()=>{
        setText('The final stage! Can you find the pencil amongst these books?');
        setTextColor('aliceblue')

        let intervalId;
        if(isWrong){
            setText('Wrong answer! 30 seconds added to your time! Please try again.')
            setTextColor('crimson')
            setTimer(prev => prev + 30);
            intervalId = setInterval(() => {
                setIsWrong('');
            },5000);
        }
        if (isWrong === false){
            setText('Congratulations! You\'ve completed the game! Tallying your score.');
            setTextColor('yellow')
            setLevel(6);
            setStopTimer(true);
            setScore(timer);
        }

        return () => {
            clearInterval(intervalId);
            setText('');
            setTextColor('');
        }
    },[isWrong])


    useEffect(()=>{
        let intervalId;
        if(!stopTimer){
           intervalId = setInterval(() => setTimer(prev => prev + 1),1000);
        }

        return () => clearInterval(intervalId);
    },[stopTimer])

    useEffect(()=>{
        let loadHighScore;

        if (level === 6) {
            loadHighScore = setInterval(() => window.location.href = `/#/high-score` ,3000);
        }
        return () => clearInterval(loadHighScore);
    },[level])


    const pictureClicked = async () => {
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture5
        }else{
            console.log('no documents found',)
        }

        for(let i=0; i<arr.length; i++){
            if (textColor === 'yellow') {
                window.location.href = `/${level}`;
            }else if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setIsWrong(false);
                break;
            }else if(arr.length - i === 1){
                setIsWrong(true);
            }
        }
        await setDoc(doc(db, 'coordinates', 'time'),{time: timer})
    }

    return (
        <>
            <img className='hard-5-img' src={Hard5} onClick={pictureClicked} style={{cursor: 'pointer', width: '832px', height: '838px'}}/>
        </>
    )
}

export default Level5