import React from 'react'
import Header from '../shared/Header'
import Post from '../shared/Posts';
const Browse = () => {
    console.log('Here');
    return (
        
        <div className='container'>
            <Header label="Browse"/>
            <div id='browsePosts'>
              <Post/>
            <Post/>  
            <Post/>
            <Post/>  
            <Post/>
            <Post/>
            <Post/>
            <Post/>  
            <Post/>
            <Post/>  
            <Post/>
            <Post/>


            </div>
            
        </div>
    )
}

export default Browse
