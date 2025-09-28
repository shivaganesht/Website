'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Code, Zap } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  const fullText = "Founder & CEO @ matriXO"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      clearInterval(timer)
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 clip-triangle opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-terminal mb-8 p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-sm text-gray-400 font-mono">
              shivaganesh@portfolio:~$ whoami
            </div>
            <div className="text-xs text-cyan-400 font-mono">{currentTime}</div>
          </div>
          
          {/* Name Display */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-white">Hey, I'm </span>
            <span className="liquid-gradient-text">Shiva Ganesh</span>
          </motion.h1>

          {/* Typing Animation */}
          <div className="font-mono text-xl md:text-2xl text-orange-400 mb-6 min-h-[2rem]">
            <Terminal className="inline w-6 h-6 mr-2" />
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-6 mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            An <span className="text-orange-400 font-semibold">intuitive</span> AI/ML Engineer & Tech Innovator
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Who develops intelligent solutions and builds the next generation of 
            <span className="text-cyan-400"> EdTech platforms</span> that are coherent to your needs.
          </p>
        </motion.div>

        {/* Specialization Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Code, text: "Full Stack Development", color: "from-blue-500 to-cyan-500" },
            { icon: Zap, text: "AI/ML Innovation", color: "from-purple-500 to-pink-500" },
            { icon: Terminal, text: "EdTech Solutions", color: "from-orange-500 to-red-500" }
          ].map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.2 }}
              className={`glass-pill px-6 py-3 rounded-full bg-gradient-to-r ${item.color} bg-opacity-20 border border-white/10`}
            >
              <item.icon className="w-5 h-5 inline mr-2" />
              <span className="text-white font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="glass-button-primary px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:scale-105 transition-all duration-300">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              View Projects
            </span>
          </button>
          <button className="glass-button-secondary px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:scale-105 transition-all duration-300 border border-cyan-400/30">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-8 bg-gradient-to-b from-orange-400 to-transparent rounded-full"
          />
        </motion.div>
      </div>

      {/* Flowing Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </div>
  )
}

export default Hero