import React from 'react';

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
        
        <p> ☐ {todo} <button onClick={handleDeleteTodo}>⌫</button></p>             
      
      </div>
    );
  }
  
  export default TodoDetails;