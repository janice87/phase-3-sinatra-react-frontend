import React from 'react';
import JournalList from './JournalList'

const JournalContainer = ({journals, onDeleteJournal}) => {
  return (
      <div>       
        <JournalList journals={journals} onDeleteJournal={onDeleteJournal} />
      
      </div>
    );
  }
  
  export default JournalContainer;