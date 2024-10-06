import { useState } from 'react'
import AddTodo from './Components/AddTodo'
import AppName from './Components/AppName'
import TodoItems from './Components/TodoItems'
import initialTodoItems from './data/InitialTodoItems'

function App() {
  
  const [todoItems,setTodoItems] =useState(initialTodoItems)

  const addTodoItem=(todoText,todoDate)=>{
    setTodoItems(currentItems=>([...currentItems,{id:todoText,todoText,todoDate}]))

  }
  const deleteTodoItem =(todoId)=>{
    setTodoItems(currentItems =>(currentItems.filter((item)=>{ return item.id !== todoId})))
    } 
  return (
    <center >
      <AppName/>
      <AddTodo addTodoItem={addTodoItem} />
      <TodoItems todoItems={todoItems} deleteTodoItem={deleteTodoItem}/>
    </center>
  )
}

export default App
