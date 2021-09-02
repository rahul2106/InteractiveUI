import React from 'react'
import Header from '../shared/Header'
import Post from '../shared/Posts';
const Browse = () => {
    return (
        <div>
            <Header label="Browse"/>
            <div id='browsePosts'>
              <Post/>
            <Post/>  
            </div>
            
        </div>
    )
}

export default Browse
