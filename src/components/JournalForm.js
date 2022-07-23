import { useState } from "react";

const JournalForm = ({onHandleAddJournal}) => {
  const [journalForm, setJournalForm] = useState({
    date: "",
    content: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJournal = {
      date: journalForm.date,
      content: journalForm.content
    }

    fetch('http://localhost:9292/journals', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newJournal)
    })
    .then(res => res.json())
    .then(data => onHandleAddJournal(data))

  }

  const handleChange = (e) => {
    setJournalForm({
      ...journalForm,
      [e.target.name]: e.target.value
    })
  }    
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="date">Today's Date:</label>  
        <input type="date" name="date" value={journalForm.date} onChange={handleChange} required />
        <br/>
        {/* <label htmlFor="date">Enter Journal:</label> */}
        <textarea rows="6" cols="50" name="content" value={journalForm.content} onChange={handleChange}></textarea>
        <br/>
        <input type="submit" value="Submit Entry" />        
        </form>
      </div>
    );
  }
  
  export default JournalForm;