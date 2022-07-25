import { useState } from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

const TodoForm = ({onHandleAddTodo}) => {
const [newTodo, setNewTodo] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'applcation/json',
             Accept: 'application/json'
        },
        body: JSON.stringify({todo: newTodo})
    })
    .then(res => res.json())
    .then(updatedTodo => onHandleAddTodo(updatedTodo))
    // .then(() => console.log("test test"))
    setNewTodo("")
}
    return (
      <div>
      <Container maxWidth="xs">
            <Box            
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
        <h3>📝 Todo List</h3>
        <br/>
        </Box>                  
      </Container> 

        <Container maxWidth="xs">
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        >      
        <form onSubmit={handleSubmit}>
        <br/>
        <TextField 
        type="text" 
        id="outlined-size-small" 
        onChange={(e) => setNewTodo(e.target.value)} 
        value={newTodo} 
        placeholder="Add task..." 
        defaultValue="Small"
        variant="outlined"
        size="small" />
             
        <IconButton type="submit" aria-label="submit" size="medium">
          <AddBoxOutlinedIcon fontSize="medium" />
        </IconButton>
        </form>   
        
        </Box>
        </Container> 
      </div>
    );
  }
  
  export default TodoForm;
  
