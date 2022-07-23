import React from 'react';

const JournalDetails = ({journalObj, onDeleteJournal, onUpdateJournal}) => {
const {date, content, id} = journalObj

const handleUpdate = () => {
      fetch(`http://localhost:9292/journals/${id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          date: date,
          content: content
        })
      })
      .then(res => res.json())
      .then((updatedJournal) => onUpdateJournal(updatedJournal))
    }

const handleDelete = () => {
  fetch(`http://localhost:9292/journals/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(() => onDeleteJournal(id))
}

    return (
      <div>
        <h3>{date}</h3> 
        <p>{content}</p>
        <button onClick={handleUpdate}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
  
  export default JournalDetails;