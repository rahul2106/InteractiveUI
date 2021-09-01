import React from 'react'
import poster from '../img/poster1.png'
const PosterText = (props) => {
 
    return (
        <div className='posterText'>
                <div className='posterContent'>
                     <header className='posterTitle'>{props.title}</header>
                    <span className='author'>{props.author}</span>
                    <footer className='duration'>{props.duration}</ footer>
                </div>
                <div>
                <img src={poster} className='posterImg' />
                </div>
               
        </div>
    )
}

export default PosterText
