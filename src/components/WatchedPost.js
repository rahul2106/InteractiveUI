import React from 'react'
import watched1 from '../img/watched1.png';
const WatchedPost = (props) => {
    return (
        <div className='watched'>
            <div className='wImg'>
                <img src={watched1} className='watchedImg'/>
            </div>
            <div className='watchedText'>
                <span className='watchedTitle'>{props.title}</span>
                <span className='watchedAuthor'>{props.author}</span>
                <span className='watchedDur'>{props.view} views  •  {props.days} days ago</span>
            </div>
        </div>
    )
}

export default WatchedPost
