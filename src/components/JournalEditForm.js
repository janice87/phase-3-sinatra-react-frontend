import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const JournalEditForm = ({onUpdateJournal}) => {
    const [journalEntry, setJournalEntry] = useState({})
    const {id} = useParams(); 
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:9292/journals/${id}`)
        .then(res => res.json())
        .then(journalObj => setJournalEntry(journalObj))
    }, [id])

    const handleSubmit = () => {
        fetch(`http://localhost:9292/journals/${id}`, {
          method: 'PATCH', 
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            date: journalEntry.date,
            content: journalEntry.content
          })
        })
        .then(res => res.json())
        .then((updatedJournal) => onUpdateJournal(updatedJournal))
        setJournalEntry({
            date: "",
            content: ""
        })
        history.push(`/journals`)
      }
   
    const handleChange = (e) => {
        setJournalEntry({
          ...journalEntry,
          [e.target.name]: e.target.value
        })
      }    

    return (
      <div>     
        <form onSubmit={handleSubmit}>

        <label htmlFor="date">Today's Date:</label>  
        <input type="date" name="date" value={journalEntry.date} onChange={handleChange} required />
        <br/>
        <label htmlFor="date">Edit Journal:</label>
        <textarea rows="6" cols="50" name="content" value={journalEntry.content} onChange={handleChange}></textarea>
        <br/>
        <input type="submit" value="Submit Entry" />        
        </form>      
      </div>
    );
  }
  
  export default JournalEditForm;