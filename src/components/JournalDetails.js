import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';

const JournalDetails = ({journalObj, onDeleteJournal}) => {
const {date, content, id} = journalObj
// const history = useHistory();

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

// const handleEditForm = () => {
//   history.push(`/journals/${id}`)
// }

    return (
      <div>
        <Container maxWidth="sm">
        <Box        
        display="flex"
        justifyContent="center"
        alignItems="center"
        >        
        <h3>
          {date}
        <IconButton aria-label="edit" size="small">
          <Link to={`/journals/${id}/edit`}><EditOutlinedIcon fontSize="small" /></Link>
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="delete" size="small">
          <BackspaceOutlinedIcon fontSize="small" />
        </IconButton>  
        </h3> 
        </Box>
        
        <Box        
        boxShadow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >      
        <p>{content}</p>
       
       <br />
       
        </Box>
        </Container>
      </div>
    );
  }
  
  export default JournalDetails;