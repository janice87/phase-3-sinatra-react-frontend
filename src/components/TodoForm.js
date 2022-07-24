import { useState } from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

const TodoForm = ({onHandleAddTodo}) => {
const [todo, setTodo] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'applcation/json',
             Accept: 'application/json'
        },
        body: JSON.stringify({todo: todo})      //why is this null???  
    })
    .then(res => res.json())
    .then(data => onHandleAddTodo(data))
    setTodo("")
}
    return (
      <div>
        <Container maxWidth="m">
        <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >

        <h2>📝Todo List:</h2>
        <br/>
        <form onSubmit={handleSubmit}>
        <br/>

        <TextField 
        type="text" 
        id="outlined-size-small" 
        onChange={(e) => setTodo(e.target.value)} 
        value={todo} 
        placeholder="Add task..." 
        defaultValue="Small"
        variant="outlined"
        size="small" />
             
        <IconButton type ="submit" aria-label="submit" size="medium">
          <AddBoxOutlinedIcon fontSize="medium" />
        </IconButton>
        </form>   
        
        </Box>
        </Container> 
      </div>
    );
  }
  
  export default TodoForm;
  
