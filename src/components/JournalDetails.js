import React from 'react';

const JournalDetails = ({journalObj}) => {
    const {date, content} = journalObj
    return (
      <div>
        <p>{date}</p> 
        <p>{content}</p>
      </div>
    );
  }
  
  export default JournalDetails;