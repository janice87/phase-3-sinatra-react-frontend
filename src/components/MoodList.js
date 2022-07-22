import React from 'react';
import MoodDetails from './MoodDetails'

const MoodList = ({moods}) => {

    const moodArray = moods.map(moodObj => (
        <MoodDetails key={moodObj.id} moodObj={moodObj} /> 
    ))

    return (
      <div>
        <p>From moodlist</p>
         <ul>{moodArray}</ul>                
      
      </div>
    );
  }
  
  export default MoodList;