import React from 'react';
import {useState, useEffect} from 'react'
import TodoList from './TodoList'

const TodoContainer = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])

    return (
      <div>       
        <TodoList todos={todos} />
      
      </div>
    );
  }
  
  export default TodoContainer;