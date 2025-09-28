'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '../components/Hero-minimal'
import About from '../components/About'
import Projects from '../components/Projects'
import Learning from '../components/Learning'
import Contact from '../components/Contact'
import Navigation from '../components/Navigation-minimal'
import EasterEgg from '../components/EasterEgg'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
        >
          {/* Animated Background Mesh */}
          <div className="fixed inset-0 bg-mesh-gradient opacity-30 animate-pulse-slow" />
          
          {/* Floating Orbs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [20, -20, 20],
                x: [10, -10, 10],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-20 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [-30, 30, -30],
                x: [15, -15, 15],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
              className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl"
            />
          </div>

          <Navigation />
          
          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Learning />
            <Contact />
          </main>

          <EasterEgg />
        </motion.div>
      )}
    </AnimatePresence>
  )
}