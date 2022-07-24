import { useState } from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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

        <h2>📝Add Todos:</h2>
        <br/>
        <br/>
        <form onSubmit={handleSubmit}>
        <br/>
        <input type="text" id="todo" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Add task..." />
        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />
        </form>   
        
        </Box>
        </Container> 
      </div>
    );
  }
  
  export default TodoForm;
  
