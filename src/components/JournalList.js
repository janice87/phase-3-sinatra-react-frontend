import React from 'react';
import JournalDetails from './JournalDetails'

const JournalList = ({journals, onDeleteJournal}) => {

    const journalArray = journals.map(journalObj => (
        <JournalDetails key={journalObj.id} journalObj={journalObj} onDeleteJournal={onDeleteJournal} /> 
    ))

    return (
      <div>
       
         <ul>{journalArray}</ul>                
      
      </div>
    );
  }
  
  export default JournalList;