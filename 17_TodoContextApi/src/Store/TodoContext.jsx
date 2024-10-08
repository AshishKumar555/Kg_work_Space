import { createContext } from "react";
import { useState } from "react";
import initialTodoItems from '../data/InitialTodoItems'

const  TodoContext=createContext();

export const ContextProvider=({children})=>{

    const [todoItems,setTodoItems] =useState(initialTodoItems)

    const addTodoItem=(todoText,todoDate)=>{
      setTodoItems(currentItems=>([...currentItems,{id:todoText,todoText,todoDate}]))
  
    }
    const deleteTodoItem =(todoId)=>{
      setTodoItems(currentItems =>(currentItems.filter((item)=>{ return item.id !== todoId})))
      } 

    const ContextVal={todoItems:todoItems,addTodoItem:addTodoItem,deleteTodoItem:deleteTodoItem}

      return <TodoContext.Provider value={ContextVal}>
                {children}
            </TodoContext.Provider>

}
export default TodoContext;