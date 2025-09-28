'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Brain, 
  GraduationCap, 
  Users, 
  Zap, 
  Target,
  Award,
  TrendingUp
} from 'lucide-react'

const About = () => {
  const skills = [
    { category: "Full Stack Development", 
      items: ["Next.js", "React", "Node.js", "Python", "TypeScript"] },
    { category: "AI & Machine Learning", 
      items: ["TensorFlow", "PyTorch", "Deep Learning", "NLP", "Computer Vision"] },
    { category: "EdTech Innovation", 
      items: ["Learning Platforms", "Community Building", "Product Strategy"] },
    { category: "Technical Leadership", 
      items: ["Team Management", "Product Strategy", "Mentoring", "Open Source"] }
  ]

  const achievements = [
    { icon: Award, label: "5+ Years Experience", value: "5+" },
    { icon: TrendingUp, label: "Projects Built", value: "20+" },
    { icon: Users, label: "Students Impacted", value: "1000+" },
    { icon: Target, label: "Success Rate", value: "95%" }
  ]

  return (
    <section id="about" className="relative py-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-400">#</span>About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about building <span className="text-orange-400">AI-powered solutions</span> that make a difference
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="about-section p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-mono text-sm">Hyderabad, India</span>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As the <span className="text-orange-400 font-semibold">Founder & CEO of matriXO</span>, 
                I'm passionate about leveraging AI and machine learning to revolutionize education and 
                create meaningful impact in the tech industry.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                My journey spans across EdTech innovation, AI/ML research, and community building. 
                I believe in the power of technology to solve real-world problems and create opportunities for everyone.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding or building the next big thing, I enjoy contributing to open-source 
                projects and mentoring aspiring developers in the community.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-pill p-6 text-center rounded-2xl"
                >
                  <achievement.icon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              <span className="text-orange-400">&gt;</span> Tech Stack & Skills
            </h3>

            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="about-section p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 && <Code2 className="w-5 h-5 text-orange-400" />}
                  {index === 1 && <Brain className="w-5 h-5 text-cyan-400" />}
                  {index === 2 && <GraduationCap className="w-5 h-5 text-purple-400" />}
                  {index === 3 && <Users className="w-5 h-5 text-green-400" />}
                  <h4 className="text-lg font-semibold text-white">
                    {skillGroup.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.8 + index * 0.1 + skillIndex * 0.05 
                      }}
                      className="tech-pill px-4 py-2 text-sm rounded-full text-white border"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8">
            Let's craft user-friendly <span className="text-cyan-400">AI solutions</span> together!
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-400 via-red-500 to-cyan-400 rounded-full mx-auto"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default About