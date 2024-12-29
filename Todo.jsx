// import React, { useRef, useState } from 'react'; 
// import todo_icon from '../assets/todo_icon.png'
// import delete_icon from '../assets/deleet.png'

// const Todo = () => {
//   const [todolist, setTodolist] = useState([]);
//   const inputRef = useRef();

//   const add = () => {
//     const inputText = inputRef.current.value.trim();
    
//     if (inputText === "") {
//       return;
//     }
    
//     const newTodo = {
//       id: Date.now(),
//       text: inputText,
//       isComplete: false,
//     };
    
//     setTodolist(prev => [...prev, newTodo]);
//     inputRef.current.value = "";
//   };

// //   const handleKeyPress = (e) => {
// //     if (e.key === 'Enter') {
// //       add();
// //     }
// //   };

//   const deleteTodo = (id) => {
//     setTodolist(prevTodos => prevTodos.filter(todo => todo.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTodolist(prevTodos) => {
     


//   const TodoItem = ({ text, id, isComplete }) => (
//     <div className="flex items-center justify-between p-4 mb-3 bg-gray-50 rounded-lg">
//       <div className="flex items-center gap-3">
//         <input
//           type="checkbox"
//           checked={isComplete}
//           onChange={() => toggleComplete(id)}
//           className="w-5 h-5 cursor-pointer"
//         />
//         <span className={`text-lg ${isComplete ? 'line-through text-gray-400' : ''}`}>
//           {text}
//         </span>
//       </div>
//       <button
//         onClick={() => deleteTodo(id)}
//         className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
//       > 
//       </button>
//     </div>
//   );

//   return (
//     <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
//       <div className="flex items-center mt-7 gap-2">
//         <h1 className="text-3xl font-semibold">To-Do List</h1>
//       </div>

//       <div className="flex items-center my-7 bg-gray-100 rounded-lg">
//         <input
//           ref={inputRef}
//           className="bg-transparent border-0 outline-none flex-1 h-14 px-6 placeholder:text-gray-400"
//           type="text"
//           placeholder="Add your task"
//           onKeyPress={handleKeyPress}
//         />
//         <button
//           onClick={add}
//           className="mr-2 px-6 py-2 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition-colors"
//         >
//           Add
//         </button>
//       </div>

//       <div className="flex flex-col">
//         {todolist.map(item => (
//           <TodoItem
//             key={item.id}
//             text={item.text}
//             id={item.id}
//             isComplete={item.isComplete}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;

// import React, { useRef, useState } from 'react';
// import todo_icon from '../assets/todo_icon.png';
// import Todoitems from './Todoitems';

// const Todo = () => {
//     const [todolist, setTodolist] = useState([]);
//     const inputRef = useRef();

//     const add = () => {
//         const inputText = inputRef.current.value.trim();
//         if (inputText === "") {
//             return;
//         }

//         const newTodo = {
//             id: Date.now(),
//             text: inputText,
//             isComplete: false,
//         };
//         setTodolist(prev => [...prev, newTodo]);
//         inputRef.current.value = "";
//     };

//     const deleteTodo = (id) => {
//         setTodolist(prevTodos => prevTodos.filter(todo => todo.id !== id));
//     };

//     const toggleComplete = (id) => {
//         setTodolist(prevTodos => 
//             prevTodos.map(todo => 
//                 todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
//             )
//         );
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             add();
//         }
//     };

//     return (
//         <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
//             <div className='flex items-center mt-7 gap-2'>
//                 <img className='w-8' src={todo_icon} alt="" />
//                 <h1 className='text-3xl font-semibold'>To-Do List</h1>
//             </div>

//             <div className='flex items-center my-7 bg-gray-200 rounded-full'>
//                 <input 
//                     ref={inputRef} 
//                     className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' 
//                     type="text" 
//                     placeholder='Add Your Task' 
//                     onkeypress={handleKeyPress} 
//                 />
//                 <button 
//                     onClick={add} 
//                     className='border-none rounded-full bg-blue-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>
//                     Add +
//                 </button>
//             </div>

//             <div>
//                 {todolist.map(item => (
//                     <Todoitems 
//                         key={item.id} 
//                         text={item.text} 
//                         id={item.id} 
//                         isComplete={item.isComplete} 
//                         deleteTodo={deleteTodo} 
//                         toggleComplete={toggleComplete} 
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Todo;






// <!--new one




import React, { useRef, useState,useEffect } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo =()=>
{
 const [todolist,setTodolist]=useState(localStorage.getItem("todos")?
JSON.parse(localStorage.getItem("todos")):[]);
    const inputRef=useRef();


    const add=()=>
    {
      const inputText = inputRef.current.value.trim();
      
     if(inputText===""){
        return null;
     }
      const newTodo={
        id:Date.now(),
        text:inputText,
        isComplete:false,
      }
      setTodolist((prev)=> [...prev,newTodo]);
      inputRef.current.value="";
    }
    const deleteTodo =(id)=>
    {
        setTodolist((prvTodos)=>
        {
           return  prvTodos.filter((todo)=>todo.id!==id
            )
        })
    }
    const toggle=(id)=>
    {
        setTodolist((prevTodos)=>{
            return prevTodos.map((todo)=>
            {
                if(todo.id=== id ){
                    return {...todo,isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todolist));
},[todolist])


    return(
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
         

{/*------title------*/}

         <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt=""/>
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
         </div>
{/*------input box------*/}

         <div className='flex items-center my-7 bg-gray-200 rounded-full' >
             <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add Your Task'/> 
         <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>
            ADD +
         </button>

        </div> 

{/*------todo list------*/}

<div>
    {todolist.map((item,index)=>
    {
        return <Todoitems key={index} text ={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
    })}
</div>

    </div>
    )
}

export default Todo