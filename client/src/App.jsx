import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/HomePage'
import About from './pages/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import ParallaxProjects from './components/ParallexProject'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <ParallaxProjects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
