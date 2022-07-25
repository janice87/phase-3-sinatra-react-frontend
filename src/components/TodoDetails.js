import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const TodoDetails = ({todoObj, onHandleDeleteTodo}) => {
    const {todo, id} = todoObj

    const handleDeleteTodo = () => {
      fetch(`http://localhost:9292/todos/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(() => onHandleDeleteTodo(id))
    }

    return (
      <div>
        <Container maxWidth="sm">
        <Box        
        display="flex"
        justifyContent="center"
        alignItems="center"
        >       
        <p> ☐ {todo}   
        <IconButton onClick={handleDeleteTodo} aria-label="delete" size="small">
          <BackspaceOutlinedIcon fontSize="small" />
        </IconButton>         
       </p>        
      </Box>                  
      </Container>           
      
      </div>
    );
  }
  
  export default TodoDetails;

//   <IconButton onClick={handleEditTodo} aria-label="edit" size="small">
//   <EditOutlinedIcon fontSize="small" />
// </IconButton>