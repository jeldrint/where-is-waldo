import React, { useEffect } from 'react'
import Easy1 from '../images/easy-1.webp'
import {db} from '../firebase'
import { doc, getDoc } from "firebase/firestore";

const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));

const Level1 = ({xCoor, yCoor, level, setLevel, setText, setTextColor}) => {

    useEffect(()=>{
        setText('Level 1: Can you find the wolf among the sheep?');
        setTextColor('aliceblue')
    },[])

    const pictureClicked = () => {
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture1
        }else{
            console.log('no documents found',)
        }
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                setText('That\'s easy. right? Click anywhere on the picture to proceed to the next level!');
                setTextColor('yellow')
                setLevel(2);
                break;
            }
        }

        if (level === 2) {
            window.location.href = `/${level}`;
        }


    }

    return (
        <>
            <img className='easy-1-img' src={Easy1} onClick={pictureClicked} style={{cursor: 'pointer', width: '838px', height: '838px'}}/>
        </>
    )
}

export default Level1