// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const TodoEditForm = () => {
//     const [todoObj, setTodoObj] = useState("")
//     const {id} = useParams(); 
// // does this make sense???
//     useEffect(() => {
//         fetch(`http://localhost:9292/todos/${id}`)
//         .then(res => res.json())
//         .then(todoObj => setTodoObj(todoObj))
//     }, [id])

//     return (
//       <div>
//         <p></p>     
      
//       </div>
//     );
//   }
  
//   export default TodoEditForm;