import React from 'react';

const TodoItem = ({ id, todoText, todoDate, deleteTodoItem  }) => {
 
//   const deleteHandler =()=>{
//   deleteTodoItem(id)
//  }
 
  
  return (
    <div className='flex justify-between max-w-4xl text-center h-12 m-5'>
      <div className='w-48 h-12 border border-black rounded-md '>{todoText}</div>
      <div className='w-48 h-12 border border-black rounded-md'>{todoDate}</div>
      <button className= 'h-12 bg-red-500 p-5 w-44 rounded-md items-center font-bold text-2xl self-center ' onClick={()=>(deleteTodoItem(id))} >Delete</button>
    </div>
  );
}

export default TodoItem;
