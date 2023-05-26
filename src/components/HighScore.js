import React from 'react'
import {db} from '../firebase'
import { doc, getDocs, query, addDoc, collection } from "firebase/firestore";

const HighScore = async (timer) =>{
    let name = prompt('Congratulations! You\'ve completed the game! Please enter your name.');
    await addDoc(collection(db, 'high score'),{
        name: name,
        timer: timer,
        hrs: Math.floor(timer / 3600),
        mins: Math.floor(timer / 60),
        secs: timer % 60        
    });

    const q = query(collection(db,'high score'))
    const querySnap = await getDocs(q);
    querySnap.forEach(item=>console.log(item.data()));
}

export default HighScore