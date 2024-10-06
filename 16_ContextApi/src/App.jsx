
import ThemeToggle from './Components/ThemeToggle'
import Welcome from './Components/Welcome'
import {ThemeProvider} from'./Store/ThemeContext'

function App() {


  return (
    <ThemeProvider className='flex flex-col items-center justify-center'>
     
      <Welcome/>
      <ThemeToggle/>
    </ThemeProvider>
    
  )
}

export default App
