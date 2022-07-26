import React from 'react';
import TodoDetails from './TodoDetails'

const TodoList = ({todos, onHandleDeleteTodo}) => {

    const todoArray = todos.map(todoObj => (
        <TodoDetails key={todoObj.id} todoObj={todoObj} onHandleDeleteTodo={onHandleDeleteTodo} /> 
    ))

    return (
      <div>        
         <ul>{todoArray}</ul>              
      </div>
    );
  }
  
  export default TodoList;