import React, {useEffect} from 'react'
import Hard4 from '../images/hard-4.jpeg'
import {db} from '../firebase'
import { doc, getDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));

const Level4 = ({xCoor, yCoor, level, setLevel, setText, setTextColor}) => {

    useEffect(()=>{
        setText('Can you spot the hidden bunny? I bet you can!');
        setTextColor('aliceblue')
    },[])

    const pictureClicked = async (e) => {
        const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture4
        }else{
            console.log('no documents found',)
        }
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setText('Wheew. How is it? Now for the last picture. Click to proceed!');
                setTextColor('yellow')
                setLevel(5);
                break;
            }
        }
        if (level === 5) {
            window.location.href = `/${level}`;
        }

    }

    return (
        <>
            <img className='hard-4-img' src={Hard4} onClick={pictureClicked} style={{cursor: 'pointer', width: '838px', height: '838px'}}/>
        </>
    )
}

export default Level4