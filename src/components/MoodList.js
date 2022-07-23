import React from 'react';
import MoodDetails from './MoodDetails'

const MoodList = ({moods, onHandleDeleteMood}) => {

    const moodArray = moods.map(moodObj => (
        <MoodDetails key={moodObj.id} moodObj={moodObj} onHandleDeleteMood={onHandleDeleteMood} /> 
    ))

    return (
      <div>        
         <ul>{moodArray}</ul>            
      </div>
    );
  }
  
  export default MoodList;