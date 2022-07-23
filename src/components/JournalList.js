import React from 'react';
import JournalDetails from './JournalDetails'

const JournalList = ({journals, onDeleteJournal, onUpdateJournal}) => {

    const journalArray = journals.map(journalObj => (
        <JournalDetails key={journalObj.id} journalObj={journalObj} onDeleteJournal={onDeleteJournal} onUpdateJournal={onUpdateJournal} /> 
    ))

    return (
      <div>
       
         <ul>{journalArray}</ul>                
      
      </div>
    );
  }
  
  export default JournalList;