import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Box, TextField, Typography, TextareaAutosize, Button} from "@material-ui/core";

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
      <Container maxWidth="xs">
        <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
          <Typography variant="h5" align="center" style={{ marginBottom: "1em" }}>✍️Edit Post</Typography> 
          <br /> 
        </Box>
      </Container>  

      <Container maxWidth="m">
          <Box       
          display="flex"
          justifyContent="center"
          alignItems="center"
          >
          <form onSubmit={handleSubmit}>
          <TextField 
                  type="date" 
                  id="outlined-size-small"
                  name="date" 
                  onChange={handleChange}                 
                  value={journalEntry.date}            
                  style={{ marginBottom: "5px", width: "150px" }}  
                  variant="outlined"
                  label="Edit Date"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  required /> 
            <br/> 
             <TextareaAutosize
                  name="content"
                  onChange={handleChange}
                  value={journalEntry.content}
                  minRows={8}
                  style={{ width: 400 }}                  
                  aria-label="post"
                  />          
            <br/>
            <Button type="submit" variant="outlined">Edit Journal</Button>
            </form>
          </Box>
        </Container>  
      </div>
    );
  }
  
  export default JournalEditForm;