import React, { useEffect, useState } from 'react'
import '../styles/MainPage.css'
import {Routes, Route} from 'react-router-dom'
import DataWriting from './01_DataWriting'
import Level1 from './Level1'
import Level2 from './Level2'
import Level3 from './Level3'
import Level4 from './Level4'
import Level5 from './Level5'

const MainPage = () => {
    const [xCoor, setXCoor] = useState(0);
    const [yCoor, setYCoor] = useState(0);
    const [level, setLevel] = useState(1);
    const [text, setText] = useState('');
    const [textColor, setTextColor] = useState('aliceblue');
    const [timer, setTimer] = useState(0)

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
        <div className='container'>
            <header className='header'>
                <h1 className='prompt-header'style={{color: textColor}}>{text}</h1>
            </header>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Level1 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor}/>} />
                    <Route path='/2' element={<Level2 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor}/>} />
                    <Route path='/3' element={<Level3 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor}/>} />
                    <Route path='/4' element={<Level4 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor}/>} />
                    <Route path='/5' element={<Level5 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor}/>} />
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