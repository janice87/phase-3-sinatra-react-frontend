import { useState } from "react";
import { Container, Box, TextField, Typography, Button} from "@material-ui/core";

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
        body: JSON.stringify(console.log({todo: todo}))
        
    })
    .then(res => res.json())
    .then(updatedTodo => onHandleAddTodo(updatedTodo))
    // .then(() => console.log("test test"))
    setTodo("")
}
    return (
      <div>
      <Container maxWidth="sm">
        <Box justifyContent="center" alignItems="center">
        <Typography variant="h5" align="center">📝Todo List</Typography>       
        <br/>
        <form onSubmit={handleSubmit}>
            <TextField 
            type="text" 
            id="outlined-size-small" 
            onChange={(e) => setTodo(e.target.value)} 
            value={todo} 
            autoFocus={true}
            fullWidth={true}        
            placeholder="Add todo..."
            variant="outlined"
            size="small" />
        <br/>
          <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Button type="submit" variant="contained" size="small">SUBMIT</Button>
          </Box>
        </form>               
        </Box>
        </Container> 
      </div>
    );
  }
  
  export default TodoForm;
  