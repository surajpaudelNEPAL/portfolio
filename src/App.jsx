import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-blue/30 selection:text-neon-blue">
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm bg-dark-surface/50 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Suraj Paudel. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind, & Framer Motion</p>
      </footer>
    </div>
  )
}

export default App
