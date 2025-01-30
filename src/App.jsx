import React from 'react'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Benefits } from './components/Benefits'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
