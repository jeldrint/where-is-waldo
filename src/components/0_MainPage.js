import React, { useEffect, useState } from 'react'
import '../styles/MainPage.css'
import {Routes, Route} from 'react-router-dom'
import DataWriting from './02_DataWriting'
import Level1 from './Level1'
import Level2 from './Level2'

const MainPage = () => {
    const [xCoor, setXCoor] = useState(0);
    const [yCoor, setYCoor] = useState(0);
    const [level, setLevel] = useState(1);

    useEffect(()=> {
        DataWriting(); //writing coordinate to the Firestore

        document.addEventListener('mousemove',getCoordinates)
        return () => document.removeEventListener('mousemove',getCoordinates);
    },[])

    const getCoordinates = (e) =>{
        setXCoor(e.offsetX);
        setYCoor(e.offsetY);
    }

    return(
        <div className='container' style={{backgroundColor: 'rgb(33,33,33)'}}>
            <header className='header'>
                <h1 className='prompt-header'>Level 1: Can you find the wolf among the sheep?</h1>
            </header>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Level1 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel}/>} />
                    <Route path='/2' element={<Level2 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel}/>} />
                </Routes>

            </main>
            <footer className='header'>
                <span>The Odin Project jeldrint</span>
                <span> Coordinates: X: {xCoor}, Y: {yCoor}</span>
            </footer>
        </div>
  
    )
}

export default MainPage