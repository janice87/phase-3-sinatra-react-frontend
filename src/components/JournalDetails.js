import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, IconButton } from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';

const JournalDetails = ({journalObj, onDeleteJournal}) => {
const {date, content, id} = journalObj

const handleDelete = () => {
  fetch(`http://localhost:9292/journals/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(() => onDeleteJournal(id))
}
    return (
      <div>
        <Container maxWidth="sm">
        <Box     
        justifyContent="center"
        alignItems="center"
        boxShadow={1}
        style={{ marginBottom: "1em" }}
        >    

        <Typography align="left" display="initial" variant="h6" style={{ marginLeft: ".8em" }}>
          {date}
        <IconButton aria-label="edit" size="small">
          <Link to={`/journals/${id}/edit`}><EditOutlinedIcon fontSize="small" /></Link>
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="delete" size="small">
          <BackspaceOutlinedIcon fontSize="small" />
        </IconButton>  
        </Typography>        
        
        <Typography align="left" variant="body2" display="initial" style={{ padding: "10px" }}>
          {content}
        </Typography>       
        
        </Box>
        </Container>
      </div>
    );
  }
  
  export default JournalDetails;