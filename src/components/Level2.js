import React from 'react'
import Easy2 from '../images/easy-2.webp'
import {db} from '../firebase'
import { doc, getDoc } from "firebase/firestore";

const Level2 = ({xCoor, yCoor, level, setLevel}) => {

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
                prompt.textContent = 'You won! Easy, right? Press any to proceed to the next level!';
                break;
            }
        }
    }

    return (
        <>
            <img className='easy-2-img' src={Easy2} onClick={pictureClicked} style={{cursor: 'pointer'}}/>
        </>
    )
}

export default Level2