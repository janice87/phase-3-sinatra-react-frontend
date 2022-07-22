import React from 'react';

const TodoDetails = ({todoObj}) => {
    const {todo} = todoObj
    return (
      <div>
        <p>{todo}</p>             
      
      </div>
    );
  }
  
  export default TodoDetails;