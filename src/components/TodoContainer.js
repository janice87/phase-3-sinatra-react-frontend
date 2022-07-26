import {useState, useEffect} from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList'

const TodoContainer = () => {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])

    const handleAddTodo = (newTodo) => {
      const updatedTodos = [...todos, newTodo]
      setTodos(updatedTodos)
    }

    const handleDeleteTodo = (id) => {
      const updatedTodos = todos.filter(todo => todo.id !== id)
      setTodos(updatedTodos)
    }

    return (
      <div>         
        <TodoForm onHandleAddTodo={handleAddTodo} />    
        <TodoList todos={todos} onHandleDeleteTodo={handleDeleteTodo} />      
      </div>
    );
  }
  
  export default TodoContainer;