import React, { useEffect } from 'react'
import Easy2 from '../images/easy-2.webp'
import {db} from '../firebase'
import { doc, setDoc, getDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
const time = await getDoc(doc(db,'coordinates','time'));

const Level2 = ({xCoor, yCoor, level, setLevel, setText, setTextColor, timer, setTimer}) => {

    useEffect(()=>{
        setText('Can you locate the heart?');
        setTextColor('aliceblue')
        setTimer(time.data().time)

        let intervalId = setInterval(() => setTimer(prev => prev + 1),1000);
        return () => clearInterval(intervalId);

    },[])

    const pictureClicked = async () => {
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture2
        }else{
            console.log('no documents found',)
        }

        if (level === 3) {
            await setDoc(doc(db, 'coordinates', 'time'),{time: timer+2}) 
            window.location.href = `/${level}`;
        }

        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setText('No sweat, isn\'t it? Now click on the picture to proceed to the next level!');
                setTextColor('yellow')
                setLevel(3);
                break;
            }else{
                if(level !== 3){
                    console.log('wrong')
                    setText('Wrong answer! 15 seconds added to your time! Please try again.');
                    setTextColor('crimson')
                    setTimer(prev => prev + 15);    
                }
            }
        }

    }

    return (
        <>
            <img className='easy-2-img' src={Easy2} onClick={pictureClicked} style={{cursor: 'pointer', width: '838px', height: '838px'}}/>
        </>
    )
}

export default Level2