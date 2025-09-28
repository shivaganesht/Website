'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, GraduationCap, Mail } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

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

      setScrolled(window.scrollY > 50)

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation - Ultra Minimal */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block transition-all duration-500`}
      >
        <motion.div
          className="nav-glass rounded-full px-6 py-2 relative"
          whileHover={{ scale: 1.02 }}
        >
          {/* Active indicator */}
          <motion.div
            className="absolute top-1 bottom-1 bg-cyan rounded-full opacity-20"
            layoutId="activeTab"
            style={{
              left: `${navItems.findIndex(item => item.id === activeSection) * 20 + 2}%`,
              width: '16%',
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />

          <div className="flex space-x-6 relative z-10">
            {navItems.map(({ id, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  activeSection === id 
                    ? 'text-cyan' 
                    : 'text-white/60 hover:text-white'
                }`}
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="md:hidden fixed top-4 right-4 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-glass rounded-full p-3 text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="md:hidden fixed top-20 right-4 z-50 nav-glass rounded-2xl p-4 min-w-[200px]"
            >
              <nav>
                <div className="space-y-2">
                  {navItems.map(({ id, label, icon: Icon }) => (
                    <motion.button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-300 ${
                        activeSection === id 
                          ? 'text-cyan bg-cyan/10' 
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={16} />
                      <span className="text-sm font-medium">{label}</span>
                      {activeSection === id && (
                        <motion.div
                          className="ml-auto w-1 h-1 rounded-full bg-cyan"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation