import React, { useEffect } from "react";
import {db} from '../firebase'
import { getDocs, query, collection } from "firebase/firestore";
import '../styles/HighScore.css'

const q = query(collection(db,'high score'))
const querySnap = await getDocs(q);


const HighScore = ({setText}) => {
    useEffect(()=>{
        const stopwatch = document.querySelector('.stopwatch')
        const coordinates = document.querySelector('.coordinates')
        coordinates.style.display = 'none';
        stopwatch.style.display = 'none';
        setText('Thank you for playing!')
    },[])

    let arr = [];
    querySnap.forEach(item=>arr.push(item.data()));
    arr.sort((a,b)=>a.timer-b.timer)
    return (
        <div className="high-score">
            <h1 style={{textAlign: 'center', color: 'aliceblue'}}>Scores</h1>
            <div className="high-score-body">
                {arr.map(item=>{
                    return(<div>
                        <h3 key={item.id}>{JSON.stringify(item.name).replace(/"/g,'')}</h3>
                        <h3>{JSON.stringify(item.mins)} mins, {JSON.stringify(item.secs)} secs</h3>
                    </div>)   
                })}
            </div>
        </div>
    )
}

export default HighScore