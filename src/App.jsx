import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import Workflow from './components/Workflow.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/testimonials.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
      <Nav/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero/>
      </div>
      <Feature/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
export default App
