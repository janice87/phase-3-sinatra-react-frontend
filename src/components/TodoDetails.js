import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import Typography from '@material-ui/core/Typography';

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
