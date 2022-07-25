import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import IconButton from '@material-ui/core/IconButton';

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
        <Container maxWidth="sm">
          <Box      
          justifyContent="center"
          alignItems="center"       
          style={{ border: "0.2px solid gray", margin: "1em", padding: "10px" }}       
          >
        <br/>
          <Typography align="left" variant="h6">
            {date}
            <span>
            <IconButton onClick={handleDeleteTodo} aria-label="delete" size="small">
              <DeleteForeverOutlinedIcon fontSize="medium" />
            </IconButton>
            </span>
          </Typography>          
          
        <Typography align="left" variant="body1" style={{ padding: "2px" }}>Today's mood: {mood}</Typography>
        <br/>
        <Typography align="left" variant="body1" style={{ padding: "2px" }}>Win of the day: {win}</Typography> 
        <br/>
        <Typography align="left" variant="body1" style={{ padding: "2px" }}>Challenge of the day: {challenge}</Typography>
                     
        </Box>
        </Container>     
      </div>
    );
  }
  
  export default MoodDetails;

