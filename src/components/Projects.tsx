'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'Amazon ML Challenge',
      description: 'Advanced entity extraction from images using computer vision and NLP. Built with TensorFlow and achieved 94% accuracy in product categorization.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'NLP', 'AWS'],
      github: 'https://github.com/shivaganesh22/amazon-ml-challenge',
      live: 'https://amazon-ml-demo.vercel.app',
      stars: 45,
      forks: 12,
      gradient: 'from-orange-400 to-pink-600'
    },
    {
      title: 'PropChain',
      description: 'Blockchain-based real estate platform enabling fractional ownership. Smart contracts for transparent property investment with automated returns.',
      tech: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
      github: 'https://github.com/shivaganesh22/propchain',
      live: 'https://propchain.vercel.app',
      stars: 67,
      forks: 23,
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Psypher Bot',
      description: 'AI-powered mental health companion using advanced NLP. Provides personalized support and resources with privacy-first architecture.',
      tech: ['Python', 'PyTorch', 'FastAPI', 'React', 'PostgreSQL'],
      github: 'https://github.com/shivaganesh22/psypher-bot',
      live: 'https://psypher-bot.vercel.app',
      stars: 89,
      forks: 34,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Nutri Advice',
      description: 'Smart nutrition advisor with meal planning and health tracking. Uses ML algorithms to provide personalized dietary recommendations.',
      tech: ['Python', 'Scikit-learn', 'Flask', 'Vue.js', 'MongoDB'],
      github: 'https://github.com/shivaganesh22/nutri-advice',
      live: 'https://nutri-advice.vercel.app',
      stars: 56,
      forks: 18,
      gradient: 'from-green-400 to-blue-500'
    },
    {
      title: 'AI Code Assistant',
      description: 'Intelligent code completion and review assistant. Trained on 10M+ code repositories to provide contextual suggestions and bug detection.',
      tech: ['Python', 'Transformers', 'FastAPI', 'TypeScript', 'Docker'],
      github: 'https://github.com/shivaganesh22/ai-code-assistant',
      live: 'https://ai-code.vercel.app',
      stars: 134,
      forks: 45,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'EcoTrack',
      description: 'Carbon footprint tracking app with gamification. Real-time environmental impact analysis with community challenges and rewards.',
      tech: ['React Native', 'Node.js', 'GraphQL', 'MongoDB', 'AWS'],
      github: 'https://github.com/shivaganesh22/ecotrack',
      live: 'https://ecotrack-app.vercel.app',
      stars: 78,
      forks: 29,
      gradient: 'from-green-500 to-teal-400'
    }
  ]

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of innovative solutions combining AI, blockchain, and modern web technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              <div className="glass rounded-3xl p-6 h-full hover:shadow-2xl transition-all duration-300 border hover:border-white/30">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Stats */}
                  <div className="flex items-center space-x-2 text-white/50 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={14} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                {/* Gradient Accent */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient} rounded-full mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Description */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full border border-white/20 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 glass rounded-lg px-4 py-2 text-white/80 hover:text-white hover:border-neon-cyan/50 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 glass rounded-lg px-4 py-2 text-white/80 hover:text-white hover:border-neon-purple/50 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.a>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Interactive Particles */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    {Array.from({ length: 5 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-neon-cyan rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: [0, Math.random() * 50 - 25],
                          y: [0, Math.random() * 50 - 25],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/shivaganesh22"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(244,114,182,0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 glass rounded-full px-8 py-4 text-white font-semibold hover:bg-neon-pink/20 transition-all duration-300 border border-neon-pink/50 hover:border-neon-pink group"
          >
            <Github size={20} />
            <span>View All Projects</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects