'use client'

import { motion } from 'framer-motion'
import { MapPin, Code, Rocket, Users } from 'lucide-react'

const About = () => {
  const skills = [
    'Python', 'TensorFlow', 'PyTorch', 'JavaScript', 'TypeScript', 
    'React', 'Next.js', 'Node.js', 'AWS', 'Azure', 'Docker', 'Kubernetes'
  ]

  const highlights = [
    {
      icon: Rocket,
      title: 'Startup Founder',
      description: 'Building matriXO, an AI-powered EdTech platform'
    },
    {
      icon: Code,
      title: 'AI/ML Engineer',
      description: 'Specializing in deep learning and transformer models'
    },
    {
      icon: Users,
      title: 'Community Builder',
      description: 'Passionate about fostering tech communities'
    }
  ]

  return (
    <section id="about" className="relative py-20 px-4">
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
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Passionate about building AI-powered solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="text-neon-cyan mr-3" size={24} />
                <span className="text-white/80">Hyderabad, India</span>
              </div>
              
              <div className="space-y-4 text-white/90">
                <p className="text-lg leading-relaxed">
                  As the Founder & CEO of <span className="text-neon-cyan font-semibold">matriXO</span>, 
                  I&apos;m passionate about leveraging AI and machine learning to revolutionize education 
                  and create meaningful impact in the tech industry.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My journey spans across EdTech innovation, AI/ML research, and community building. 
                  I believe in the power of technology to solve real-world problems and create 
                  opportunities for everyone.
                </p>
                
                <p className="text-lg leading-relaxed">
                  When I&apos;m not coding or building the next big thing, I enjoy contributing to 
                  open-source projects and mentoring aspiring developers in the community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,245,255,0.2)" }}
                className="glass rounded-2xl p-6 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-full p-3 text-neon-cyan">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-white/70">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Tech Stack & Skills
          </h3>
          
          <div className="glass rounded-3xl p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 20px rgba(139,92,246,0.3)",
                    backgroundColor: "rgba(139,92,246,0.1)"
                  }}
                  className="glass rounded-full px-4 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer border border-white/10 hover:border-neon-purple/50"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Projects Built' },
            { number: '100+', label: 'Problems Solved' }
          ].map(({ number, label }, index) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 text-center hover:glow-purple transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-neon-purple mb-2"
              >
                {number}
              </motion.div>
              <div className="text-white/70">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About