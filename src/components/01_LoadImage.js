import React from 'react'
import '../styles/LoadImage.css'
import Easy1 from '../images/easy-1.webp'
import {db} from '../firebase'
import { doc, getDoc } from "firebase/firestore";

const LoadImage = ({xCoor, yCoor}) => {
    const picture1Clicked = async (e) => {
        const getCoordinates = await getDoc(doc(db,'coordinates','coordinates'));
        let arr = []

        if (getCoordinates.exists()){
            arr = getCoordinates.data().picture1
        }else{
            console.log('no documents found',)
        }
        for(let i=0; i<arr.length; i++){
            if(xCoor >= arr[i].x1 && xCoor <= arr[i].x2 && yCoor >= arr[i].y1 && yCoor <= arr[i].y2){
                console.log(xCoor,yCoor,arr[i])
                console.log('You won! Press any to proceed to the next level!')
                break;
            }
        }



    }

    return (
        <>
            <img className='easy-1-img' src={Easy1} onClick={picture1Clicked} style={{cursor: 'pointer'}}/>
        </>
    )
}

export default LoadImage