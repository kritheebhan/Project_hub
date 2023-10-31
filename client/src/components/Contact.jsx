// import React from 'react'

// export default function Contact() {
//     const [todos] = React.useState ([
//         {id: 1, text: "hi", done: false},
//         {id: 2, text: "hello", done: false},
//         {id: 3, text: "hmm", done: false}
//     ])
//   return (
//     <div>
//         <h1>Contact</h1>
//         <TodoList todos={todos}/>
//         <AddTodo setTodos={setTodos}/>
//     </div>
//   );
// }

// function TodoList ({todos}) {
//     return(
//         <ul>
//             {todos.map((todo)=>(
//                 <li key={todo.id}>{todo.text}</li>
//             ))}
//         </ul>
//     )
// }
// function AddTodo({setTodos}) {
//     const inputRef = React.useRef();
    
//     function handleAddTodo(event) {
//         event.preventDefault();
//         const text = event.target.elements.addTodo.value;
//         const todo = {
//             id: 4,
//             text,
//             done: false
//     };
//     setTodos((prevTodos)=>{
//         return prevTodos.concat(todo)
//     });
//     }
//     return (
//         <form onSubmit={handleAddTodo}>
//         <input name="addTodo" placeholder="Add todo" />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// // export default Contact