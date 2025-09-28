'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection?: string
}

const Navigation = ({ activeSection = 'home' }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: '#home', icon: Home },
    { id: 'about', label: '#about', icon: User },
    { id: 'works', label: '#works', icon: Briefcase },
    { id: 'contact', label: '#contact', icon: Mail }
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex"
      >
        <div className="glass-nav px-6 py-3 rounded-full flex items-center gap-8">
          {/* Logo */}
          <motion.div 
            className="text-orange-400 font-bold text-lg"
            whileHover={{ scale: 1.05 }}
          >
            shivaganesh
          </motion.div>

          {/* Nav Items */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-orange-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-400/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full glass-button-secondary"
          >
            <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-4 right-4 z-50 md:hidden"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-nav p-3 rounded-2xl"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="absolute top-16 right-0 glass-nav p-4 rounded-2xl min-w-[200px]"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-orange-400 bg-orange-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed top-6 left-6 z-40 md:hidden"
      >
        <div className="text-orange-400 font-bold text-xl">
          shivaganesh
        </div>
      </motion.div>
    </>
  )
}

export default Navigation