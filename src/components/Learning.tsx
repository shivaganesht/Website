'use client'

import { motion } from 'framer-motion'
import { BookOpen, Brain, Zap, Lightbulb, TrendingUp, Code2 } from 'lucide-react'

const Learning = () => {
  const learningAreas = [
    {
      icon: Brain,
      title: 'Agentic AI',
      description: 'Exploring autonomous AI agents and their applications in real-world scenarios',
      progress: 85,
      color: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(139,92,246,0.3)'
    },
    {
      icon: Zap,
      title: 'Transformer Models',
      description: 'Deep diving into attention mechanisms and advanced language models',
      progress: 78,
      color: 'from-blue-500 to-cyan-400',
      glowColor: 'rgba(0,245,255,0.3)'
    },
    {
      icon: TrendingUp,
      title: 'Scaling Startups',
      description: 'Learning growth strategies and building sustainable tech businesses',
      progress: 65,
      color: 'from-green-400 to-emerald-500',
      glowColor: 'rgba(16,185,129,0.3)'
    },
    {
      icon: Code2,
      title: 'Advanced MLOps',
      description: 'Production-ready ML pipelines with monitoring and automated deployment',
      progress: 72,
      color: 'from-orange-400 to-red-500',
      glowColor: 'rgba(244,114,182,0.3)'
    }
  ]

  const currentFocus = [
    'Fine-tuning Large Language Models for domain-specific tasks',
    'Building robust AI systems with human feedback loops',
    'Implementing efficient vector databases for RAG applications',
    'Exploring edge AI deployment strategies'
  ]

  const researchInterests = [
    {
      title: 'Neural Architecture Search',
      description: 'Automated design of optimal neural network architectures'
    },
    {
      title: 'Federated Learning',
      description: 'Privacy-preserving machine learning across distributed systems'
    },
    {
      title: 'Multimodal AI',
      description: 'Combining vision, language, and audio for comprehensive AI understanding'
    }
  ]

  return (
    <section id="learning" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning & Research
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Continuously exploring cutting-edge technologies and research areas
          </p>
        </motion.div>

        {/* Current Learning Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Lightbulb className="mr-3 text-neon-cyan" size={28} />
            Current Focus Areas
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {learningAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 10px 30px ${area.glowColor}`
                }}
                className="glass rounded-3xl p-6 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`glass rounded-full p-3 bg-gradient-to-r ${area.color}`}>
                    <area.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{area.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-white/60 mb-2">
                    <span>Progress</span>
                    <span>{area.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${area.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="mr-3 text-neon-purple" size={28} />
            What I&apos;m Learning Now
          </h3>
          
          <div className="glass rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {currentFocus.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/80 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Research Interests
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {researchInterests.map((research, index) => (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 35px rgba(244,114,182,0.2)"
                }}
                className="glass rounded-2xl p-6 text-center hover:border-neon-pink/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{research.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{research.description}</p>
                
                {/* Animated Icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 mx-auto mt-4 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple flex items-center justify-center"
                >
                  <div className="w-6 h-6 bg-white rounded-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Learning Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: '50+', label: 'Research Papers Read', icon: '📚' },
            { number: '15+', label: 'Online Courses Completed', icon: '🎓' },
            { number: '100+', label: 'Hours of Weekly Learning', icon: '⏱️' },
            { number: '5+', label: 'Conferences Attended', icon: '🎯' }
          ].map(({ number, label, icon }, index) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass rounded-2xl p-6 text-center hover:glow-cyan transition-all duration-300"
            >
              <div className="text-4xl mb-2">{icon}</div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl font-bold text-neon-cyan mb-1"
              >
                {number}
              </motion.div>
              <div className="text-white/70 text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Learning