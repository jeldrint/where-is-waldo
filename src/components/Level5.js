import React, {useEffect} from 'react'
import Hard5 from '../images/hard-5.jpg'
import {db} from '../firebase'
import { doc, getDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));

const Level5 = ({xCoor, yCoor, level, setLevel, setText, setTextColor}) => {

    useEffect(()=>{
        setText('The final stage! Can you find the pencil amongst these books?');
        setTextColor('aliceblue')
    },[])

    const pictureClicked = async (e) => {
        const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
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