import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-accent-200 rounded-lg blur-lg opacity-70"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Jannat Kour Bijral"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={item} className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-primary-800">
                Hello, I'm Jannat
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a B.Tech Computer Science student at Lovely Professional University with a 
                passion for Linux, Cybersecurity, and Web Development. I enjoy diving deep into 
                system architecture, exploring security vulnerabilities, and creating web applications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My technical journey is complemented by strong communication skills, adaptability, 
                and a collaborative mindset. I thrive in team environments and constantly seek to expand my knowledge.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h4 className="text-xl font-semibold text-primary-700 mb-4">Technical Skills</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-medium text-primary-600 mb-3">Languages</h5>
                  <div className="space-y-3">
                    {skills
                      .filter((skill) => skill.category === 'language')
                      .map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1, delay: 0.3 }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-medium text-primary-600 mb-3">Tools</h5>
                  <div className="space-y-3">
                    {skills
                      .filter((skill) => skill.category === 'tool')
                      .map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-accent-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-medium text-primary-600 mb-3">Skills</h5>
                  <div className="space-y-3">
                    {skills
                      .filter((skill) => skill.category === 'skill')
                      .map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary-700 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1, delay: 0.7 }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;