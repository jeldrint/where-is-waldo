import React, { useEffect } from 'react'
import Easy2 from '../images/easy-2.webp'
import {db} from '../firebase'
import { doc, getDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));

const Level2 = ({xCoor, yCoor, level, setLevel, setText, setTextColor}) => {

    useEffect(()=>{
        setText('Can you locate the heart?');
        setTextColor('aliceblue')
    },[])

    const pictureClicked = async (e) => {
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture2
        }else{
            console.log('no documents found',)
        }
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setText('No sweat, isn\'t it? Now click on the picture to proceed to the next level!');
                setTextColor('yellow')
                setLevel(3);
                break;
            }
        }
        if (level === 3) {
            window.location.href = `/${level}`;
        }

    }

    return (
        <>
            <img className='easy-2-img' src={Easy2} onClick={pictureClicked} style={{cursor: 'pointer', width: '838px', height: '838px'}}/>
        </>
    )
}

export default Level2