import React from 'react';
import JournalDetails from './JournalDetails'

const JournalList = ({journals}) => {

    const journalArray = journals.map(journalObj => (
        <JournalDetails key={journalObj.id} journalObj={journalObj} /> 
    ))

    return (
      <div>
        <p>From JOurnallist</p>
         <ul>{journalArray}</ul>                
      
      </div>
    );
  }
  
  export default JournalList;