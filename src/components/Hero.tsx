'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Sparkles, Zap } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [glitchMode, setGlitchMode] = useState(false)
  const [secretKeyCount, setSecretKeyCount] = useState(0)
  const [showHologram, setShowHologram] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Secret key sequence for glitch mode
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'KeyG') {
        setSecretKeyCount(prev => {
          const newCount = prev + 1
          if (newCount >= 3) {
            setGlitchMode(true)
            setTimeout(() => setGlitchMode(false), 3000)
            return 0
          }
          return newCount
        })
      }
    }

    // Hologram mode on specific time
    const now = new Date()
    if (now.getSeconds() % 30 === 0) {
      setShowHologram(true)
      setTimeout(() => setShowHologram(false), 2000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('keypress', handleKeyPress)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  const liquidBlobs = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className={`absolute rounded-full opacity-15 blur-2xl animate-liquid-morph`}
      style={{
        width: `${120 + i * 20}px`,
        height: `${120 + i * 20}px`,
        background: [
          'linear-gradient(45deg, #00f5ff, #8b5cf6)',
          'linear-gradient(45deg, #f472b6, #10b981)',
          'linear-gradient(45deg, #8b5cf6, #f59e0b)',
          'linear-gradient(45deg, #10b981, #ef4444)',
          'linear-gradient(45deg, #f59e0b, #00f5ff)',
          'linear-gradient(45deg, #ef4444, #f472b6)',
          'linear-gradient(45deg, #00f5ff, #10b981)',
          'linear-gradient(45deg, #8b5cf6, #ef4444)'
        ][i]
      }}
      animate={{
        x: [0, Math.random() * 300 - 150, Math.random() * 200 - 100, 0],
        y: [0, Math.random() * 200 - 100, Math.random() * 300 - 150, 0],
        scale: [1, 1.3, 0.7, 1.1, 1],
        rotate: [0, 120, 240, 360],
      }}
      transition={{
        duration: 12 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.8
      }}
      initial={{
        left: `${10 + i * 12}%`,
        top: `${20 + i * 8}%`
      }}
    />
  ))

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Liquid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {liquidBlobs}
        
        {/* Interactive Glass Morph with Enhanced Effects */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(0,245,255,0.15) 0%, 
              rgba(139,92,246,0.1) 25%, 
              rgba(244,114,182,0.08) 50%, 
              transparent 70%)`
          }}
        />

        {/* Aurora Background Animation */}
        <motion.div
          className="absolute inset-0 bg-aurora opacity-20 animate-aurora"
          style={{ backgroundSize: '400% 400%' }}
        />

        {/* Floating Glass Particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 glass rounded-full opacity-40 animate-glass-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Enhanced Name with Perfect Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative mb-8"
        >
          <motion.h1 
            className={`text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-purple-200 mb-4 ${
              glitchMode ? 'animate-glitch' : ''
            } ${showHologram ? 'animate-hologram' : ''}`}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{
              textShadow: isHovered 
                ? '0 0 30px rgba(0,245,255,0.5), 0 0 60px rgba(139,92,246,0.3)' 
                : '0 0 20px rgba(255,255,255,0.2)'
            }}
          >
            Shiva Ganesh
          </motion.h1>
          
          <motion.div
            className="text-4xl md:text-6xl lg:text-7xl font-light bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-cyan-200"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          >
            Talikota
          </motion.div>

          {/* Perfect iOS-style Glass Background */}
          <motion.div
            className="absolute inset-0 -z-10 glass-card rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
            animate={{ 
              opacity: isHovered ? 0.6 : 0.3, 
              scale: isHovered ? 1.02 : 1,
              rotateX: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          >
            {/* Animated Glass Highlight */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
              animate={{ x: [-100, 100, -100] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Corner Sparkles */}
            {isHovered && Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neon-cyan rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0], 
                  opacity: [0, 1, 0],
                  rotate: 360 
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2 
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Subtitle with Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative mb-12"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-10 mx-auto max-w-4xl relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4">
                <Sparkles className="w-6 h-6 text-neon-cyan animate-spin-slow" />
              </div>
              <div className="absolute bottom-4 right-4">
                <Zap className="w-6 h-6 text-neon-purple animate-bounce-slow" />
              </div>
            </div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl text-white/95 font-light mb-6"
              animate={{ 
                background: [
                  'linear-gradient(45deg, #ffffff, #00f5ff)',
                  'linear-gradient(45deg, #00f5ff, #8b5cf6)',
                  'linear-gradient(45deg, #8b5cf6, #f472b6)',
                  'linear-gradient(45deg, #f472b6, #ffffff)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Founder & CEO @ <span className="text-neon-cyan font-semibold animate-neon-pulse">matriXO</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              EdTech • AI/ML • Innovator
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Building AI-powered solutions and communities that shape the future of education and technology
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: "0 20px 60px rgba(0,245,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="glass-button rounded-full px-10 py-5 text-white font-semibold text-lg transition-all duration-300 border border-neon-cyan/60 hover:border-neon-cyan relative overflow-hidden group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              rotateY: -5,
              boxShadow: "0 20px 60px rgba(139,92,246,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="glass-button rounded-full px-10 py-5 text-white font-semibold text-lg transition-all duration-300 border border-neon-purple/60 hover:border-neon-purple relative overflow-hidden group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Contact Me</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="flex gap-8 justify-center mb-16"
        >
          {[
            { 
              icon: Github, 
              href: "https://github.com/shivaganesh22", 
              color: "hover:text-neon-cyan",
              glow: "hover:glow-cyan" 
            },
            { 
              icon: Linkedin, 
              href: "https://linkedin.com/in/shiva-ganesh-talikota", 
              color: "hover:text-neon-purple",
              glow: "hover:glow-purple" 
            },
            { 
              icon: Mail, 
              href: "mailto:shivaganesh.talikota@gmail.com", 
              color: "hover:text-neon-pink",
              glow: "hover:glow-pink" 
            }
          ].map(({ icon: Icon, href, color, glow }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.3, 
                rotate: 360,
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              className={`glass-button rounded-full p-4 text-white/80 ${color} ${glow} transition-all duration-500 relative group`}
              initial={{ opacity: 0, y: 20, rotate: -180 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 1.9 + index * 0.1, type: "spring" }}
            >
              <Icon size={28} />
              
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 cursor-pointer glass-subtle rounded-full p-3 hover:text-white hover:glow-cyan transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>

      {/* Secret Message for Triple G Press */}
      {glitchMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-4 right-4 z-50 glass-strong rounded-2xl p-4 max-w-xs"
        >
          <p className="text-neon-cyan font-semibold text-sm">🎮 Glitch Mode Activated!</p>
          <p className="text-white/80 text-xs">Reality is just a suggestion!</p>
        </motion.div>
      )}

      {/* Enhanced Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero