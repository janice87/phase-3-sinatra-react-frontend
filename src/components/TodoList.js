import React from 'react';
import TodoDetails from './TodoDetails'

const TodoList = ({todos}) => {

    const todoArray = todos.map(todoObj => (
        <TodoDetails key={todoObj.id} todoObj={todoObj} /> 
    ))

    return (
      <div>
        <p>TodoList Component</p>
         <ul>{todoArray}</ul>                
      
      </div>
    );
  }
  
  export default TodoList;