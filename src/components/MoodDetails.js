import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const MoodDetails = ({moodObj, onHandleDeleteMood}) => {
    const {mood, date, win, challenge, id} = moodObj
    
    const handleDeleteTodo = () => {
      fetch(`http://localhost:9292/moods/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(() => onHandleDeleteMood(id))
    }
    
    return (
      <div>
        <Container maxWidth="xs">
        <Box
        m={1}
        boxShadow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        
        <br/>
        <ul>
        <h3>{date}<span><button onClick={handleDeleteTodo}>⌫</button></span></h3>
        <li>Today I was feeling: {mood}</li>
        <br/>
        <li>My win for the day: {win}</li> 
        <br/>
        <li>The challenge of the day: {challenge}</li>
        </ul>        
        

        </Box>
        </Container>            
      
      </div>
    );
  }
  
  export default MoodDetails;