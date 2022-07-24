import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const JournalEditForm = ({onUpdateJournal}) => {
    const [journalEntry, setJournalEntry] = useState({})
    const {id} = useParams(); 
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:9292/journals/${id}`)
        .then(res => res.json())
        .then(journalObj => setJournalEntry(journalObj))
    }, [id])

    const handleSubmit = (e) => {
      e.preventDefault();
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
        <Container maxWidth="sm">
        <Box
        m={1}
        boxShadow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        > 
        <form onSubmit={handleSubmit}>

        <label htmlFor="date">Today's Date:</label>  
        <input type="date" name="date" value={journalEntry.date} onChange={handleChange} required />
        <br/>
        <label htmlFor="date">Edit Journal:</label>
        <textarea rows="6" cols="50" name="content" value={journalEntry.content} onChange={handleChange}></textarea>
        <br/>
        <input type="submit" value="Submit Entry" />        
        </form>
        </Box>
        </Container>      
      </div>
    );
  }
  
  export default JournalEditForm;