import { useState } from "react";

const TodoForm = () => {
const [todoFormData, setTodoFormData] = useState()


const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:9292/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'applcation/json',
             Accept: 'application/json'
        },
        body: JSON.stringify(todoFormData)
    })
    .then(res => res.json())
    .then(data => setTodoFormData(data))
}
    return (
      <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTodoFormData(e.target.value)} value={todoFormData}></input>
        </form>   
      
      </div>
    );
  }
  
  export default TodoForm;