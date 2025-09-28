'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, ArrowRight, MapPin, Calendar } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/shivaganesh22',
      color: 'hover:text-neon-cyan hover:shadow-cyan',
      description: 'Check out my repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shiva-ganesh-talikota',
      color: 'hover:text-neon-purple hover:shadow-purple',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:shivaganesh.talikota@gmail.com',
      color: 'hover:text-neon-pink hover:shadow-pink',
      description: 'Drop me a message'
    }
  ]

  const collaborationAreas = [
    'EdTech Innovation',
    'AI/ML Research',
    'Open Source Projects',
    'Community Building',
    'Startup Mentorship',
    'Tech Speaking'
  ]

  return (
    <section id="contact" className="relative py-20 px-4">
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
            Let&apos;s Create Together
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Open to collaborate on EdTech, AI/ML, open source & community building
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Main Contact Card */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="text-neon-cyan mr-4" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                  <p className="text-white/70">Always excited to discuss new opportunities</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-white/80">
                  <MapPin className="mr-3 text-neon-purple" size={20} />
                  <span>Hyderabad, India (Available for remote work)</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Calendar className="mr-3 text-neon-pink" size={20} />
                  <span>Available for consultation & collaboration</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map(({ icon: Icon, label, href, color, description }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 10
                  }}
                  className={`glass rounded-2xl p-6 block ${color} transition-all duration-300 hover:border-white/30 group`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="glass rounded-full p-3">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-current">
                          {label}
                        </h4>
                        <p className="text-white/60 text-sm">{description}</p>
                      </div>
                    </div>
                    <ArrowRight 
                      size={20} 
                      className="text-white/40 group-hover:text-current group-hover:translate-x-2 transition-all duration-200" 
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Collaboration Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Collaboration Card */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Collaboration Areas
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {collaborationAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }}
                    className="glass rounded-xl p-4 text-center hover:border-neon-cyan/50 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-white/90 text-sm font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center"
              >
                <p className="text-white/70 mb-6 leading-relaxed">
                  I&apos;m passionate about working with like-minded individuals and organizations 
                  to create meaningful impact through technology. Let&apos;s build something amazing together!
                </p>
                
                <motion.a
                  href="mailto:shivaganesh.talikota@gmail.com"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(0,245,255,0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 glass rounded-full px-8 py-4 text-white font-semibold hover:bg-neon-cyan/20 transition-all duration-300 border border-neon-cyan/50 hover:border-neon-cyan group"
                >
                  <Mail size={20} />
                  <span>Start a Conversation</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
              </motion.div>
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-3xl p-8 text-center relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 rounded-3xl" />
              
              <div className="relative z-10">
                <blockquote className="text-lg text-white/90 italic mb-4 leading-relaxed">
                  &quot;The future belongs to those who believe in the beauty of their dreams and 
                  have the courage to pursue them with technology.&quot;
                </blockquote>
                <cite className="text-neon-cyan font-semibold">- Shiva Ganesh Talikota</cite>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-white/60">
              Built with ❤️ using Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact