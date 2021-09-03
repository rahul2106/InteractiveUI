import React from 'react'

import PosterText from './PosterText';
const Poster = () => {
    let posterData=[{
        title:"Prepare for your first skateboard",
        author:"Thomas Edison",
        duration:"2 weeks ago"
      }];
    return (
        <div id='poster'>
         <PosterText title={posterData[0].title } author={posterData[0].author } 
            duration={posterData[0].duration }/>
        <PosterText title={posterData[0].title } author={posterData[0].author } 
             duration={posterData[0].duration }/>
      <PosterText title={posterData[0].title } author={posterData[0].author } 
            duration={posterData[0].duration }/>
             <PosterText title={posterData[0].title } author={posterData[0].author } 
            duration={posterData[0].duration }/>
               <PosterText title={posterData[0].title } author={posterData[0].author } 
            duration={posterData[0].duration }/>
               <PosterText title={posterData[0].title } author={posterData[0].author } 
            duration={posterData[0].duration }/>
               <PosterText title={posterData[0].title } author={posterData[0].author } 
            duration={posterData[0].duration }/>
               <PosterText title={posterData[0].title } author={posterData[0].author } 
            duration={posterData[0].duration }/>
        </div>
    )
}

export default Poster
