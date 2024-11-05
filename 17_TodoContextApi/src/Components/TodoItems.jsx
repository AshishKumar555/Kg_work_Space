import React from 'react';
import TodoItem from './TodoItem';
import { useContext } from 'react';
import TodoContext from '../Store/TodoContext';

const TodoItems = () => {
  const {todoItems,deleteTodoItem}=useContext(TodoContext);
  return (
    <div>
      {
        todoItems.map((item)=>{return <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}  />})
      }
    </div>
  );
}

export default TodoItems;
