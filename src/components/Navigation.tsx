'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, GraduationCap, Mail, Sparkles } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [showSparkle, setShowSparkle] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'learning', label: 'Learning', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      // Update scrolled state for navbar style
      setScrolled(window.scrollY > 50)

      // Find active section
      let currentSection = 'hero'
      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = navItems[index].id
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Random sparkle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSparkle(true)
      setTimeout(() => setShowSparkle(false), 1000)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block transition-all duration-500 ${
          scrolled ? 'top-2' : 'top-4'
        }`}
      >
        <motion.div
          className={`glass-nav rounded-full px-8 py-3 border border-white/20 relative overflow-hidden ${
            scrolled ? 'backdrop-blur-3xl' : 'backdrop-blur-2xl'
          }`}
          whileHover={{ scale: 1.02 }}
          style={{
            background: scrolled 
              ? 'rgba(255,255,255,0.08)' 
              : 'rgba(255,255,255,0.06)'
          }}
        >
          {/* Animated highlight bar */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan/30 to-neon-purple/30 rounded-full"
            layout
            layoutId="activeTab"
            style={{
              width: `${100 / navItems.length}%`,
              x: `${navItems.findIndex(item => item.id === activeSection) * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />

          {/* Floating sparkles */}
          <AnimatePresence>
            {showSparkle && (
              <motion.div
                className="absolute top-2 right-2"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                exit={{ scale: 0, rotate: 720 }}
                transition={{ duration: 1 }}
              >
                <Sparkles className="w-4 h-4 text-neon-cyan" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex space-x-8 relative z-10">
            {navItems.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === id 
                    ? 'text-white shadow-lg' 
                    : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={activeSection === id ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={16} />
                </motion.div>
                <span>{label}</span>
                
                {/* Active indicator glow */}
                {activeSection === id && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      boxShadow: '0 0 20px rgba(0,245,255,0.5), inset 0 0 20px rgba(255,255,255,0.1)'
                    }}
                  />
                )}

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, rgba(0,245,255,0.1), rgba(139,92,246,0.1))',
                    boxShadow: '0 0 15px rgba(255,255,255,0.2)'
                  }}
                />
              </motion.button>
            ))}
          </div>

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0,245,255,0.2)',
                '0 0 30px rgba(139,92,246,0.3)',
                '0 0 20px rgba(244,114,182,0.2)',
                '0 0 20px rgba(0,245,255,0.2)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="md:hidden fixed top-4 right-4 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-strong rounded-full p-3 text-white relative overflow-hidden border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0"
            animate={{ opacity: isOpen ? 1 : 0 }}
            style={{
              background: 'linear-gradient(45deg, rgba(0,245,255,0.3), rgba(139,92,246,0.3))',
              boxShadow: '0 0 25px rgba(0,245,255,0.4)'
            }}
          />
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-20 right-4 z-50 glass-strong rounded-3xl p-6 min-w-[280px] border border-white/20 overflow-hidden"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute top-4 left-4 w-3 h-3 bg-neon-cyan rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-2 h-2 bg-neon-purple rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>

              <nav className="relative z-10">
                <motion.div 
                  className="text-lg font-semibold text-white mb-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Navigation
                </motion.div>

                <div className="space-y-3">
                  {navItems.map(({ id, label, icon: Icon }, index) => (
                    <motion.button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group relative overflow-hidden ${
                        activeSection === id 
                          ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-white shadow-lg border border-neon-cyan/30' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        animate={activeSection === id ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={activeSection === id ? 'text-neon-cyan' : ''}
                      >
                        <Icon size={20} />
                      </motion.div>
                      <span className="font-medium">{label}</span>

                      {/* Active indicator */}
                      {activeSection === id && (
                        <motion.div
                          className="absolute right-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                        </motion.div>
                      )}

                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(90deg, rgba(0,245,255,0.1), rgba(139,92,246,0.1))'
                        }}
                      />
                    </motion.button>
                  ))}
                </div>
              </nav>

              {/* Menu border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(0,245,255,0.3)',
                    '0 0 40px rgba(139,92,246,0.4)',
                    '0 0 30px rgba(244,114,182,0.3)',
                    '0 0 30px rgba(0,245,255,0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation