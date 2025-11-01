import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  // Ensure light mode is always active
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor position tracking 
  const mouse = useRef({x: 0, y: 0})
  const position = useRef({x: 0, y: 0})

  useEffect(() => {
    const handelMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handelMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3D(${mouse.current.x -6}px, ${mouse.current.y -6}px, 0)`
        outlineRef.current.style.transform = `translate3D(${position.current.x -20}px, ${position.current.y -20}px, 0)`
      }
      requestAnimationFrame(animate)
    }
    animate()

    return() => {
      document.removeEventListener('mousemove', handelMouseMove)
    }
  },[])

  return (
    <div className="relative bg-white">
      <Toaster />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
     {/*  <Teams /> */}
      <ContactUs />
      <Footer />

      {/* Custom Cursor Ring */}
      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" 
      style={{transition: 'transform 0.1s ease-out'}}>
      </div>
      {/* Custom Cursor Dot */}
      <div ref={dotRef}  className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"></div>
    </div>
  )
}

export default App
