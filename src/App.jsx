import { useState } from 'react'
import Home from './pages/Home'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Expertise from './components/Expertise'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </>
  )
}

export default App
