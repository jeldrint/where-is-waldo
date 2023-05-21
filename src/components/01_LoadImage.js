import React from 'react'
import '../styles/LoadImage.css'
import Easy1 from '../images/easy-1.webp'
import DataWriting from './02_DataWriting'

const LoadImage = () => {
    const pictureClicked = (e) => {
        DataWriting(e.pageX,e.pageY);
        
    }

    return (
        <>
            <img className='easy-1-img' src={Easy1} onClick={pictureClicked} style={{cursor: 'pointer'}}/>
            <div className='dimension-tracker' style={{top: '360px', left: '661px', height: '50px', width: '55px'}}></div>
            <div className='dimension-tracker' style={{top: '360px', left: '716px', height: '31px', width: '2px'}}></div>
            <div className='dimension-tracker' style={{top: '360px', left: '718px', height: '26px', width: '7px'}}></div>
            <div className='dimension-tracker' style={{top: '349px', left: '659px', height: '11px', width: '166px'}}></div>
        </>
    )
}

export default LoadImage