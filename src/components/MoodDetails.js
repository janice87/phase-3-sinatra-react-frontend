import React from 'react';

const MoodDetails = ({moodObj}) => {
    const {mood, date, win, challenge} = moodObj
    return (
      <div>
        <p>{date}</p> 
        <p>Today I was feeling: {mood}</p>
        <p>My win for the day: {win}</p> 
        <p>The challene of the day: {challenge}</p>             
      
      </div>
    );
  }
  
  export default MoodDetails;