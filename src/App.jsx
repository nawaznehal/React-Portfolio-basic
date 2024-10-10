import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contacts from './components/Contacts'

import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Skills/>
      <Work/>
      <Contacts/>
    
    </div>
  )
}

export default App
