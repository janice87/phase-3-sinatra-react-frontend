import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const TodoDetails = ({todoObj, onHandleDeleteTodo}) => {
    const {todo, id} = todoObj

    const handleDeleteTodo = () => {
      fetch(`http://localhost:9292/todos/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(() => onHandleDeleteTodo(id))
    }

    const handleEditTodo = () => {
      
    }

    return (
      <div>
        <Container maxWidth="sm">
        <Box
        m={1}
        boxShadow={1}
        bgcolor="background.paper"
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        <p> ☐ {todo} <button onClick={handleDeleteTodo}>⌫</button> <button onClick={handleEditTodo}>Edit</button></p>  
        </Box>                  
           </Container>           
      
      </div>
    );
  }
  
  export default TodoDetails;