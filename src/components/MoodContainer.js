import React from 'react';
import {useState, useEffect} from 'react'
import MoodList from './MoodList'

const MoodContainer = () => {
    const [moods, setMoods] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/moods')
        .then(res => res.json())
        .then(data => setMoods(data))
    }, [])

    return (
      <div>       
        <MoodList moods={moods} />
      
      </div>
    );
  }
  
  export default MoodContainer;