import { useState } from 'react'
import AboutMe from './components/AboutMe'
import Extracurricular from './components/Extracurricular'
import Header from './components/Header'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Section from './components/Section'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-100 px-3 py-8'>
      <div className='bg-white max-w-4xl mx-auto rounded-xl shadow-lg '>
            <Header></Header>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Education/>
            <Hobbies/>
            <Extracurricular/>
            <Contact/> 
      </div>
    </div>
  )
}

export default App
