import React from 'react'
import Easy1 from '../images/easy-1.webp'
import dataWriting from '../firebase'

const LoadImage = () => {
    const pictureClicked = (e) => {
        dataWriting(e.pageX,e.pageY);
        console.log(e.clientX, e.clientY)
    }

    return (
        <img className='easy-1-img' src={Easy1} onClick={pictureClicked} style={{cursor: 'pointer'}}/>
    )
}

export default LoadImage