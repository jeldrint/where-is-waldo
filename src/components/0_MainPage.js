import React, { useEffect, useState } from 'react'
import '../styles/MainPage.css'
import {Routes, Route} from 'react-router-dom'
import DataWriting from './01_DataWriting'
import Level1 from './Level1'
import Level2 from './Level2'
import Level3 from './Level3'
import Level4 from './Level4'
import Level5 from './Level5'
import HighScore from './HighScore'

const MainPage = () => {
    const [timer, setTimer] = useState(0);
    const [xCoor, setXCoor] = useState(0);
    const [yCoor, setYCoor] = useState(0);
    const [level, setLevel] = useState(1);
    const [text, setText] = useState('');
    const [textColor, setTextColor] = useState('aliceblue');

    useEffect(()=> {
        DataWriting(); //writing coordinate to the Firestore

        document.addEventListener('mousemove',getCoordinates)
        return () => {
            document.removeEventListener('mousemove',getCoordinates);
        }
    },[])

    const getCoordinates = (e) =>{
        setXCoor(e.offsetX);
        setYCoor(e.offsetY);
    }

    const hrs = Math.floor(timer /3600) % 60;
    const mins = Math.floor(timer /60) % 60;
    const secs = Math.floor(timer) % 60;


    return(
        <div className='container' style={{backgroundColor: 'rgb(33,33,33)'}}>
            <header className='header'>
                <h1 className='prompt-header'style={{color: textColor}}>{text}</h1>
                <div>
                    <h1 className='stopwatch'>
                        {hrs}:{mins.toString().padStart(2,'0')}:
                        {secs.toString().padStart(2,'0')}
                    </h1>
                </div>
            </header>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Level1 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor} timer={timer} setTimer={setTimer} />} />
                    <Route path='/2' element={<Level2 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor} timer={timer} setTimer={setTimer} />} />
                    <Route path='/3' element={<Level3 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor} timer={timer} setTimer={setTimer} />} />
                    <Route path='/4' element={<Level4 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor} timer={timer} setTimer={setTimer}/>} />
                    <Route path='/5' element={<Level5 xCoor={xCoor} yCoor={yCoor} level={level} setLevel={setLevel} setText={setText} setTextColor={setTextColor} timer={timer} setTimer={setTimer}/>} />
                    <Route path='/high-score' element={<HighScore />} />
                </Routes>
            </main>
            <footer className='header'>
                <span>2023 {String.fromCharCode(169)} jeldrint</span>
                <span> Coordinates: X: {xCoor}, Y: {yCoor}</span>
            </footer>
        </div>
  
    )
}

export default MainPage