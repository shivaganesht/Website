'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'learning', label: 'Learning' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="glass rounded-full px-6 py-3">
          <div className="flex space-x-8">
            {navItems.map(({ id, label }) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === id
                    ? 'text-neon-cyan glow-cyan'
                    : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-cyan rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 glass rounded-full p-3 md:hidden"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </motion.button>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 right-0 w-64 glass-dark backdrop-blur-heavy z-40 md:hidden"
      >
        <div className="flex flex-col items-start justify-center h-full p-8 space-y-6">
          {navItems.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-lg font-medium transition-all duration-300 w-full text-left ${
                activeSection === id
                  ? 'text-neon-cyan glow-cyan'
                  : 'text-white/70 hover:text-white'
              }`}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  )
}

export default Navigation