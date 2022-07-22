import { useState } from "react";
// import Button from '@mui/material/Button';

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
        <h2>Todays Todos:</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Add todo</label>
        <input type="text" id="todo" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Add task..." />
        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />
        </form>   
      </div>
    );
  }
  
  export default TodoForm;