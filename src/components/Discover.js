import React from 'react'
import Header from '../shared/Header'
import Poster from '../shared/Poster'
import MostWatched from './MostWatched'
import { Story } from './Story'
import WatchedPost from './WatchedPost'

const Discover = () => {

    return (
        <div id='discover' className='container'>
            <Header label="Discover"/>
            <Story/>
            <Poster/>
            <MostWatched/>
        </div>
    )
}

export default Discover
