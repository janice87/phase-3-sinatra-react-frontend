import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Box, TextField, Typography, TextareaAutosize, Button} from "@material-ui/core";

const JournalForm = ({onHandleAddJournal}) => {
  const [journalForm, setJournalForm] = useState({
    date: "",
    content: ""
  })
  const history = useHistory();
  
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
    history.push(`/journals`)
  }

  const handleChange = (e) => {
    setJournalForm({
      ...journalForm,
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
          <Typography variant="h5" align="center" style={{ marginBottom: "1em" }}>📔Add Post</Typography> 
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
                  value={journalForm.date}             
                  style={{ marginBottom: "5px", width: "150px" }}  
                  variant="outlined"
                  label="Todays Date"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  required /> 
            <br/> 
             <TextareaAutosize
                  name="content"
                  onChange={handleChange}
                  value={journalForm.content}
                  minRows={8}
                  style={{ width: 400 }}                  
                  aria-label="post"
                  />          
            <br/>
            <Button type="submit" variant="outlined">Submit</Button>
            </form>
          </Box>
        </Container>  
      </div>
    );
  }
  
  export default JournalForm;


    // {/* <textarea rows="8" cols="50" name="content" value={journalForm.content} onChange={handleChange}></textarea> */}