import React from 'react'
import '../styles/MainPage.css'
import LoadImage from './01_LoadImage'

const MainPage = () => {
    return(
        <div className='container'>
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
            </footer>
        </div>
  
    )
}

export default MainPage