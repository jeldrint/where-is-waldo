import React, { useEffect } from 'react'
import Easy1 from '../images/easy-1.webp'
import {db} from '../firebase'
import { doc, getDoc } from "firebase/firestore";

const Level1 = ({xCoor, yCoor, level, setLevel}) => {

    const pictureClicked = async (e) => {
        const prompt = document.querySelector('.prompt-header')    
        const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture1
        }else{
            console.log('no documents found',)
        }
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                prompt.textContent = 'You won! Easy, right? Click anywhere to proceed to the next level!';
                setLevel(2);
                break;
            }
        }

        if (level === 2) {
            window.location.href = '/2';
        }


    }

    return (
        <>
            <img className='easy-1-img' src={Easy1} onClick={pictureClicked} style={{cursor: 'pointer'}}/>
        </>
    )
}

export default Level1