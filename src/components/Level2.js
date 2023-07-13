import React, { useEffect,useState } from 'react'
import Easy2 from '../images/easy-2.webp'
import {db} from '../firebase'
import { doc, setDoc, getDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
const time = await getDoc(doc(db,'coordinates','time'));

const Level2 = ({xCoor, yCoor, level, setLevel, setText, textColor, setTextColor, timer, setTimer}) => {
    const [isWrong, setIsWrong] = useState('');

    useEffect(()=>{
        let intervalId = setInterval(() => setTimer(prev => prev + 1),1000);
        setTimer(time.data().time)

        return () => {
            clearInterval(intervalId)
        }

    },[])

    useEffect(()=>{
        setText('Can you locate the heart?');
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
            setText('No sweat, isn\'t it? Now click on the picture to proceed to the next level!');
            setTextColor('yellow')
            setLevel(3);
        }

        return () => {
            clearInterval(intervalId);
            setText('');
            setTextColor('');
        }
    },[isWrong])

    const pictureClicked = async () => {
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture2
        }else{
            console.log('no documents found',)
        }

        for(let i=0; i<arr.length; i++){
            if (level === 3) {
                window.location.href = `/#/level-${level}`;
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
            <img className='easy-2-img' src={Easy2} onClick={pictureClicked} style={{cursor: 'pointer', width: '838px', height: '838px'}}/>
        </>
    )
}

export default Level2