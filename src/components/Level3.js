import React, {useEffect} from 'react'
import Medium3 from '../images/medium-3.jpg'
import {db} from '../firebase'
import { doc, getDoc, setDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
const time = await getDoc(doc(db,'coordinates','time'));

const Level3 = ({xCoor, yCoor, level, setLevel, setText, setTextColor, timer, setTimer}) => {

    useEffect(()=>{
        setText('Now it gets interesting! Can you locate the monkey amongst the crowd?');
        setTextColor('aliceblue')
        setTimer(time.data().time)

        let intervalId = setInterval(() => setTimer(prev => prev + 1),1000);
        return () => clearInterval(intervalId);
    },[])

    const pictureClicked = async () => {
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture3
        }else{
            console.log('no documents found',)
        }
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setText('Impressive! Click on the picture to proceed to the next level.');
                setTextColor('yellow')
                setLevel(4);
                break;
            }
        }
        if (level === 4) {
            await setDoc(doc(db, 'coordinates', 'time'),{time: timer})
            window.location.href = `/${level}`;
        }

    }

    return (
        <>
            <img className='medium-3-img' src={Medium3} onClick={pictureClicked} style={{cursor: 'pointer', width: '783px', height: '838px'}}/>
        </>
    )
}

export default Level3