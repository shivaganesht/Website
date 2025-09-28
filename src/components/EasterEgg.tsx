'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Code, Coffee, Zap, Heart, Rocket } from 'lucide-react'

const EasterEgg = () => {
  const [konami, setKonami] = useState<string[]>([])
  const [matrixMode, setMatrixMode] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showSecret, setShowSecret] = useState(false)

  // Konami code: up, up, down, down, left, right, left, right, b, a
  
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
    
    const handleKeyPress = (e: KeyboardEvent) => {
      const newKonami = [...konami, e.code]
      if (newKonami.length > konamiCode.length) {
        newKonami.shift()
      }
      setKonami(newKonami)

      // Check if konami code is complete
      if (JSON.stringify(newKonami) === JSON.stringify(konamiCode)) {
        setMatrixMode(true)
        setTimeout(() => setMatrixMode(false), 10000)
        setKonami([])
      }
    }

    // Secret click sequence on logo
    const handleLogoClick = () => {
      setClickCount(prev => prev + 1)
      if (clickCount >= 6) {
        setShowSecret(true)
        setTimeout(() => setShowSecret(false), 5000)
        setClickCount(0)
      }
    }

    // Add click listener to the main heading (if it exists)
    const heading = document.querySelector('h1')
    if (heading) {
      heading.addEventListener('click', handleLogoClick)
    }

    window.addEventListener('keydown', handleKeyPress)
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      if (heading) {
        heading.removeEventListener('click', handleLogoClick)
      }
    }
  }, [konami, clickCount])

  // Matrix rain effect
  const MatrixRain = () => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    return (
      <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/80" />
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-neon-green text-sm font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
            }}
            animate={{
              y: window.innerHeight + 100,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 20 }, (_, j) => (
              <div key={j} style={{ opacity: 1 - j * 0.05 }}>
                {characters[Math.floor(Math.random() * characters.length)]}
              </div>
            ))}
          </motion.div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl p-8 text-center max-w-md"
          >
            <h3 className="text-2xl font-bold text-neon-green mb-4">🎉 Matrix Mode Activated!</h3>
            <p className="text-white/80">Welcome to the Matrix, Neo... I mean, visitor! 🕶️</p>
            <p className="text-white/60 text-sm mt-2">You found the Konami code easter egg!</p>
          </motion.div>
        </div>
      </div>
    )
  }

  // Secret developer message
  const SecretMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <div className="glass rounded-3xl p-8 max-w-md text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-4"
        >
          <Sparkles size={48} className="text-neon-purple mx-auto" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-4">🎊 Secret Unlocked!</h3>
        <p className="text-white/80 mb-4">
          Congratulations! You found the hidden click sequence! 🎯
        </p>
        <p className="text-white/60 text-sm">
          You&apos;re now part of the elite group who pays attention to details! 
          Perfect HR material right here! 😉
        </p>
        <div className="flex justify-center space-x-2 mt-4">
          {[Coffee, Code, Zap, Heart, Rocket].map((Icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            >
              <Icon size={20} className="text-neon-cyan" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  // Interactive cursor particles
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Random chance to create particles
      if (Math.random() > 0.95) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY
        }
        setParticles(prev => [...prev.slice(-10), newParticle])
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id))
        }, 2000)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Hidden dev tools detector
  useEffect(() => {
    const detectDevTools = () => {
      const threshold = 160
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║  🎉 Hey there, fellow developer! You found the hidden console! ║
    ║                                                              ║
    ║  Thanks for inspecting the code! This portfolio was built    ║
    ║  with love using Next.js, Tailwind CSS, and Framer Motion.  ║
    ║                                                              ║
    ║  Want to see more? Check out the source code on GitHub!     ║
    ║  🚀 github.com/shivaganesh22                                ║
    ║                                                              ║
    ║  P.S. Try the Konami code (↑↑↓↓←→←→BA) for a surprise! 🎮    ║
    ║  Or click my name 7 times quickly! 🖱️                       ║
    ╚══════════════════════════════════════════════════════════════╝
        `)
      }
    }

    const interval = setInterval(detectDevTools, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Matrix Rain Effect */}
      <AnimatePresence>
        {matrixMode && <MatrixRain />}
      </AnimatePresence>

      {/* Secret Click Message */}
      <AnimatePresence>
        {showSecret && <SecretMessage />}
      </AnimatePresence>

      {/* Cursor Trail Particles */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full"
            style={{
              left: particle.x - 4,
              top: particle.y - 4,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: [0, 1, 0], 
              opacity: [1, 0.8, 0],
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30]
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Hidden Message for Screen Readers */}
      <div className="sr-only">
        Easter eggs hidden throughout this site:
        - Try the Konami code (up, up, down, down, left, right, left, right, B, A)
        - Click the main heading 7 times quickly
        - Open browser dev tools for a special message
        - Move your mouse around for particle trails
      </div>

      {/* Floating Achievement Badges (Random Appearance) */}
      <AnimatePresence>
        {Math.random() > 0.999 && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-4 right-4 z-50 glass rounded-2xl p-4 max-w-xs"
          >
            <div className="flex items-center space-x-3">
              <Sparkles className="text-neon-purple" size={24} />
              <div>
                <p className="text-white font-semibold text-sm">🏆 Explorer Badge</p>
                <p className="text-white/70 text-xs">You&apos;re really paying attention!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default EasterEgg