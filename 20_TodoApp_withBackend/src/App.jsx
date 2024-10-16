import { useState } from 'react'
import AddTodo from './Components/AddTodo'
import AppName from './Components/AppName'
import TodoItems from './Components/TodoItems'
import initialTodoItems from './data/InitialTodoItems'
import { useContext } from 'react'
import { ContextProvider } from './Store/TodoContext'
import LoadItems from './Components/LoadItems'

function App() {
   
 
  
  return (
    <ContextProvider>
      <center >
        <AppName/>
        <AddTodo  />
        <LoadItems/>
        <TodoItems />
      </center>
    </ContextProvider>
  )
}

export default App
