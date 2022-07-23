import React from 'react';
// import {useState, useEffect} from 'react'
import JournalList from './JournalList'

const JournalContainer = ({journals, onDeleteJournal}) => {
    // const [journals, setJournals] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/journals')
    //     .then(res => res.json())
    //     .then(data => setJournals(data))
    // }, [])

    return (
      <div>       
        <JournalList journals={journals} onDeleteJournal={onDeleteJournal} />
      
      </div>
    );
  }
  
  export default JournalContainer;