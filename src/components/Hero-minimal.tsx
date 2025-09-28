'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Terminal, Code2, Zap } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [time, setTime] = useState(new Date())
  const [commandText, setCommandText] = useState('')
  const [secretSequence, setSecretSequence] = useState('')

  // Terminal command animation
  const commands = ['npm install future', 'git push origin innovation', 'yarn build success']
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      })
    }

    // Time update
    const timeInterval = setInterval(() => setTime(new Date()), 1000)

    // Terminal animation
    let commandIndex = 0
    const commandInterval = setInterval(() => {
      const fullCommand = commands[commandIndex]
      let charIndex = 0
      const typeInterval = setInterval(() => {
        setCommandText(fullCommand.slice(0, charIndex + 1))
        charIndex++
        if (charIndex >= fullCommand.length) {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCommandText('')
            commandIndex = (commandIndex + 1) % commands.length
          }, 2000)
        }
      }, 100)
    }, 4000)

    // Secret konami code
    const handleKeyDown = (e: KeyboardEvent) => {
      setSecretSequence(prev => (prev + e.key).slice(-6))
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keydown', handleKeyDown)
      clearInterval(timeInterval)
      clearInterval(commandInterval)
    }
  }, [])

  // Easter egg trigger
  const isSecretActive = secretSequence.includes('matrix')

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden techy-bg">
      
      {/* Minimal Fluid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Single elegant blob */}
        <motion.div
          className="absolute w-96 h-96 fluid-blob opacity-30"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Minimal particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan rounded-full opacity-60"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content - Ultra Minimal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-lg p-3 mb-8 text-left max-w-md mx-auto"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <Terminal className="w-4 h-4 text-cyan ml-auto" />
          </div>
          <div className="font-mono text-sm text-cyan">
            <span className="text-white">$ </span>
            <span>{commandText}</span>
            <span className="animate-pulse">|</span>
          </div>
        </motion.div>

        {/* Name - Liquid Glass Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-light liquid-text mb-2">
            Shiva Ganesh
          </h1>
          <div className="text-3xl md:text-4xl font-extralight text-white/80">
            Talikota
          </div>
        </motion.div>

        {/* Minimal Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="liquid-glass rounded-full px-6 py-3 mb-8 inline-block"
        >
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-white/80">Online</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="text-cyan font-mono">
              {time.toLocaleTimeString()}
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center space-x-1">
              <Code2 className="w-3 h-3" />
              <span className="text-white/60">Building</span>
            </div>
          </div>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-12"
        >
          <div className="text-lg md:text-xl text-white/90 mb-2">
            Founder & CEO @ <span className="text-cyan font-medium">matriXO</span>
          </div>
          <div className="text-sm text-white/60">
            AI/ML • EdTech • Innovation
          </div>
        </motion.div>

        {/* Minimal Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glass rounded-full px-8 py-3 text-white font-medium flex items-center space-x-2 group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Projects</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glass rounded-full px-8 py-3 text-white font-medium flex items-center space-x-2 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Connect</span>
          </motion.button>
        </motion.div>

        {/* Social Links - Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex gap-6 justify-center mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/shivaganesh22" },
            { icon: Linkedin, href: "https://linkedin.com/in/shiva-ganesh-talikota" },
            { icon: Mail, href: "mailto:shivaganesh.talikota@gmail.com" }
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="liquid-glass rounded-full p-3 text-white/70 hover:text-cyan transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="liquid-glass rounded-full p-2 cursor-pointer hover:glow-cyan transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={20} className="text-white/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Secret Matrix Effect */}
      {isSecretActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 pointer-events-none"
        >
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-500 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {String.fromCharCode(Math.random() * 94 + 33)}
            </motion.div>
          ))}
          
          <motion.div
            className="absolute top-4 right-4 liquid-glass rounded-lg p-4 pointer-events-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <div className="text-green-500 font-mono text-sm">
              {'>'} MATRIX MODE ACTIVATED
            </div>
            <div className="text-white/70 text-xs mt-1">
              Welcome to the real world, Neo.
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Hero