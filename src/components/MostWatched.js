import React from 'react'
import WatchedPost from './WatchedPost'

const MostWatched = () => {
let watched=[{
title:"Prepare for your first skateboard jump",
author:"Hordan Wise",
view:"125,908",
days:"2"
},{
    title:"Basic how to ride your skateboard comfortly",
    author:"Hordan Wise",
    view:"125,908",
    days:"2" 
}];



    return (
        <div id='watchedSection'>
            <div className='watchedPart'>{watched.map((heading, index) =>
             <WatchedPost className='story' key={index} 
                title={heading.title}
                author={heading.author}
                view={heading.view}
                days={heading.day}
            
            />)}</div>
            <div className='watchedPart'>{watched.map((heading, index) =>
             <WatchedPost className='story' key={index} 
                title={heading.title}
                author={heading.author}
                view={heading.view}
                days={heading.day}
            
            />)}</div>
            
           
        </div>
    )
}

export default MostWatched
