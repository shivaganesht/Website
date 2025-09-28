'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const liquidBlobs = Array.from({ length: 5 }, (_, i) => (
    <motion.div
      key={i}
      className={`absolute w-32 h-32 md:w-48 md:h-48 rounded-full opacity-20 blur-xl`}
      style={{
        background: [
          'linear-gradient(45deg, #00f5ff, #8b5cf6)',
          'linear-gradient(45deg, #f472b6, #10b981)',
          'linear-gradient(45deg, #8b5cf6, #f472b6)',
          'linear-gradient(45deg, #10b981, #00f5ff)',
          'linear-gradient(45deg, #f472b6, #8b5cf6)'
        ][i]
      }}
      animate={{
        x: [0, Math.random() * 200 - 100, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, Math.random() * 200 - 100, 0],
        scale: [1, 1.5, 0.8, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5
      }}
      initial={{
        left: `${20 + i * 15}%`,
        top: `${30 + i * 10}%`
      }}
    />
  ))

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Liquid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {liquidBlobs}
        
        {/* Interactive Glass Morph */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,245,255,0.1) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Name with Liquid Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-purple-200 mb-4"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            Shiva Ganesh
          </motion.h1>
          
          <motion.div
            className="text-4xl md:text-6xl lg:text-7xl font-light bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-cyan-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Talikota
          </motion.div>

          {/* Liquid Glass Name Background */}
          <motion.div
            className="absolute inset-0 -z-10 glass rounded-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 0.3 : 0.1, scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative mb-8"
        >
          <div className="glass rounded-2xl p-6 md:p-8 mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light mb-4">
              Founder & CEO @ <span className="text-neon-cyan font-semibold">matriXO</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              EdTech • AI/ML • Innovator
            </p>
            <p className="text-base md:text-lg text-white/60 mt-4 max-w-3xl mx-auto">
              Building AI-powered solutions and communities that shape the future of education and technology
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,245,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="glass rounded-full px-8 py-4 text-white font-semibold text-lg hover:bg-neon-cyan/20 transition-all duration-300 border border-neon-cyan/50 hover:border-neon-cyan"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="glass rounded-full px-8 py-4 text-white font-semibold text-lg hover:bg-neon-purple/20 transition-all duration-300 border border-neon-purple/50 hover:border-neon-purple"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex gap-6 justify-center mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/shivaganesh22", color: "hover:text-neon-cyan" },
            { icon: Linkedin, href: "https://linkedin.com/in/shiva-ganesh-talikota", color: "hover:text-neon-purple" },
            { icon: Mail, href: "mailto:shivaganesh.talikota@gmail.com", color: "hover:text-neon-pink" }
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className={`glass rounded-full p-3 text-white/70 ${color} transition-all duration-300 hover:shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero