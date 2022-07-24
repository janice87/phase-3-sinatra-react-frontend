import { useState } from "react";
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router-dom";

//import TextField from '@material-ui/core/TextField'
//import { makeStyles } from '@material-ui/core/styles';

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
    // setJournalForm({date: "", content: ""})
    history.push(`/journals`)
  }

  const handleChange = (e) => {
    setJournalForm({
      ...journalForm,
      [e.target.name]: e.target.value
    })
  }    

  // const useStyles = makeStyles((theme) => ({
  //   container: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     width: 200,
  //   },
  // }));  
  
  //   const classes = useStyles();

    return (
      <div>
        <Container maxWidth="sm">
        <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >

        <form onSubmit={handleSubmit}>
        <label htmlFor="date">Today's Date:</label>  
        <input type="date" name="date" value={journalForm.date} onChange={handleChange} required />

         {/* <TextField
        value={journalForm.date} 
        onChange={handleChange}
        id="date"
        label="Todays Date"
        type="date"
        defaultValue="2022-07-22"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />   */}
        {/* <TextField value={journalForm.content} onChange={handleChange} label="Enter Journal" variant="outlined" multiline required /> */}
       
        <br/>
        {/* <label htmlFor="date">Enter Journal:</label> */}
        <textarea rows="6" cols="50" name="content" value={journalForm.content} onChange={handleChange}></textarea>
        <br/>
        <input type="submit" value="Submit Entry" />        
        </form>

        </Box>
        </Container>  
      </div>
    );
  }
  
  export default JournalForm;