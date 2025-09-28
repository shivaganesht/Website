'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '../components/Hero-pro'
import About from '../components/About-pro'
import Projects from '../components/Projects'
import Learning from '../components/Learning'
import Contact from '../components/Contact'
import Navigation from '../components/Navigation-pro'
import EasterEgg from '../components/EasterEgg'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
    
    // Section detection for navigation
    const handleScroll = () => {
      const sections = ['home', 'about', 'works', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen"
        >
          {/* Navigation */}
          <Navigation activeSection={activeSection} />
          
          {/* Main Content */}
          <main id="home">
            <Hero />
          </main>
          
          <About />
          
          <section id="works">
            <Projects />
            <Learning />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
          
          {/* Easter Egg */}
          <EasterEgg />
        </motion.div>
      )}
    </AnimatePresence>
  )
}