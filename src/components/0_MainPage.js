import React, { useEffect, useState } from 'react'
import '../styles/MainPage.css'
import LoadImage from './01_LoadImage'

const MainPage = () => {
    const [xCoor, setXCoor] = useState(0);
    const [yCoor, setYCoor] = useState(0);

    useEffect(()=> {
        document.addEventListener('mousemove',getCoordinates)
        return () => document.removeEventListener('mousemove',getCoordinates);
    },[])

    const getCoordinates = (e) =>{
        setXCoor(e.pageX);
        setYCoor(e.pageY);
    }


    return(
        <div className='container' style={{backgroundColor: 'rgb(33,33,33)'}}>
            <header className='header'>
                <span>image1</span>
                <span>image2</span>
                <span>image3</span>
            </header>
            <main className='main'>
                <LoadImage />
            </main>
            <footer className='header'>
                <span>The Odin Project jeldrint</span>
                <span> Coordinates: X: {xCoor}, Y: {yCoor}</span>
            </footer>
        </div>
  
    )
}

export default MainPage