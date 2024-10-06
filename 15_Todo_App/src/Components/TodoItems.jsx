import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({todoItems,deleteTodoItem}) => {
  return (
    <div>
      {
        todoItems.map((item)=>{return <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} deleteTodoItem={deleteTodoItem} />})
      }
    </div>
  );
}

export default TodoItems;
