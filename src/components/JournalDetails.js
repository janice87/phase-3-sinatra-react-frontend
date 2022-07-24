import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

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
      
        {/* <button onClick={handleEditForm}>Edit</button> */}
        <Link to={`/journals/${id}/edit`}><EditOutlinedIcon /></Link>
        <button onClick={handleDelete}><DeleteForeverOutlinedIcon /></button>
        </Box>
        </Container>
      </div>
    );
  }
  
  export default JournalDetails;