import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const JournalDetails = ({journalObj, onDeleteJournal}) => {
const {date, content, id} = journalObj
const history = useHistory();

// const handleUpdate = () => {
//       fetch(`http://localhost:9292/journals/${id}`, {
//         method: 'PATCH', 
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         },
//         body: JSON.stringify({
//           date: date,
//           content: content
//         })
//       })
//       .then(res => res.json())
//       .then((updatedJournal) => onUpdateJournal(updatedJournal))
//     }

const handleDelete = () => {
  fetch(`http://localhost:9292/journals/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(() => onDeleteJournal(id))
}

const handleEditForm = () => {
  history.push(`/journals/${id}`)
}

    return (
      <div>
        <Container maxWidth="m">
        <Box
        m={1}
        boxShadow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >        
        <h3>{date}</h3> 
        <p>{content}</p>
      
        <button onClick={handleEditForm}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        </Box>
        </Container>
      </div>
    );
  }
  
  export default JournalDetails;