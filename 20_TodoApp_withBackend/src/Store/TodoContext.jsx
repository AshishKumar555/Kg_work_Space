import { createContext,useReducer } from "react";
import { useState } from "react";
import initialTodoItems from '../data/InitialTodoItems'
import todoItemsReducer from "./TodoItemsReducer";

const  TodoContext=createContext();


export const ContextProvider=({children})=>{

    // const [todoItems,setTodoItems] =useState(initialTodoItems)

    const [todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,initialTodoItems)
    const addTodoItem=(id,todoText,todoDate)=>{
      // setTodoItems(currentItems=>([...currentItems,{id:todoText,todoText,todoDate}]))
      dispatchTodoItems({
        type:'ADD_ITEMS',
        payload:{id,todoText,todoDate}
      })
  
    }
    const deleteTodoItem =(todoId)=>{
      // setTodoItems(currentItems =>(currentItems.filter((item)=>{ return item.id !== todoId})))
      dispatchTodoItems({
        type:'DELETE_ITEM',
        payload:{todoId}
      })
      } 

    const addAllTodoItems = (todoItems) => {
      dispatchTodoItems({
        type: 'LOAD_ALL_ITEMS',
          payload: {
            allItems: todoItems
          }
        })
     }

    const ContextVal={todoItems,addTodoItem,deleteTodoItem,addAllTodoItems}

      return <TodoContext.Provider value={ContextVal}>
                {children}
            </TodoContext.Provider>

}
export default TodoContext;