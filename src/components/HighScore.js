import React from "react";
import {db} from '../firebase'
import { getDocs, query, collection } from "firebase/firestore";

const q = query(collection(db,'high score'))
const querySnap = await getDocs(q);


const HighScore = () => {
    querySnap.forEach(item=>console.log(item.data()));
    return (
        <h1>Display High Score</h1>
    )
}

export default HighScore