import React, {useEffect} from 'react'
import Hard5 from '../images/hard-5.jpg'
import {db} from '../firebase'
import { doc, getDoc, setDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
const time = await getDoc(doc(db,'coordinates','time'));

const Level5 = ({xCoor, yCoor, level, setLevel, setText, setTextColor, timer, setTimer}) => {

    useEffect(()=>{
        setText('The final stage! Can you find the pencil amongst these books?');
        setTextColor('aliceblue')
        setTimer(time.data().time)

        let intervalId = setInterval(() => setTimer(prev => prev + 1),1000);
        return () => clearInterval(intervalId);
    },[])

    const pictureClicked = async () => {
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture5
        }else{
            console.log('no documents found',)
        }
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setText('Congratulations! You\'ve completed the game! Tally your score.');
                setTextColor('yellow')
                setLevel(6);
                break;
            }
        }
        if (level === 6) {
            await setDoc(doc(db, 'coordinates', 'time'),{time: timer})
            window.location.href = `/`;
        }

    }

    return (
        <>
            <img className='hard-5-img' src={Hard5} onClick={pictureClicked} style={{cursor: 'pointer', width: '832px', height: '838px'}}/>
        </>
    )
}

export default Level5