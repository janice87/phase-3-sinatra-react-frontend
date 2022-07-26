import React from 'react';
import {Box, Container, Typography, IconButton} from '@material-ui/core';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';

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
        <Box justifyContent="center" alignItems="center">       
          <Typography variant="body1" align="justify" style={{ margin: ".2em" }}> ☐ {todo}   
            <IconButton onClick={handleDeleteTodo} aria-label="delete" size="small">
              <BackspaceOutlinedIcon fontSize="small" />
            </IconButton>         
          </Typography>        
       </Box>                  
       </Container>         
      </div>
    );
  }
  
  export default TodoDetails;
