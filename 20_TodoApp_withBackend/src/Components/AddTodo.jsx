import React from 'react';
import {useRef} from'react'
import { useContext } from 'react';
import TodoContext from '../Store/TodoContext';
import { todoItemToClientModel } from '../utils/ModelUtil';

const AddTodo = () => {

  const {addTodoItem}=useContext(TodoContext);

    const todoTextInput=useRef() 
    const todoDateInput=useRef()

    const addHandler=()=>{
        const todoText=todoTextInput.current.value
        const todoDate=todoDateInput.current.value
        todoTextInput.current.value=''
        todoDateInput.current.value=''

        fetch("http://localhost:3000/todos",{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
            task:todoText,
            date:todoDate
          })
        }).then(req=>req.json())
        .then(serverItem => {
          const {id,todoText,todoDate}=todoItemToClientModel(serverItem)
          addTodoItem(id ,todoText,todoDate)
         console.log("item is added " + id,todoText,todoDate)
        })

         


    }

  return (
    <div className='flex justify-between max-w-4xl text-center h-12'>
      <input className='w-48 h-12 border border-black rounded-md '
      type="text" ref={todoTextInput} placeholder='Enter the text ' />

      <input className='w-48 h-12 border border-black rounded-md' type="date" ref={todoDateInput} />

      <button className= 'h-12 bg-green-500 p-5 w-44 rounded-md items-center font-bold text-2xl self-center'  onClick={addHandler} >Add</button>
    </div>
  );
}

export default AddTodo;
