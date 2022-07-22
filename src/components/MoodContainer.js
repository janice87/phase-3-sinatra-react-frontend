import React from 'react';
import {useState, useEffect} from 'react'
import MoodList from './MoodList'
import MoodForm from './MoodForm'

const MoodContainer = () => {
    const [moods, setMoods] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/moods')
        .then(res => res.json())
        .then(data => setMoods(data))
    }, [])

    const handleAddMood = (newMood) => {
      const updatedMoods = [...moods, newMood]
      setMoods(updatedMoods)
    }

    return (
      <div>
        <MoodForm onAddMood={handleAddMood} />       
        <MoodList moods={moods} />      
      </div>
    );
  }
  
  export default MoodContainer;