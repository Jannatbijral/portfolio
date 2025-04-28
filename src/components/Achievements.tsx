import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';
import { achievements } from '../data';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-20 bg-pastel-pink"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-800 mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-accent-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500/10 rounded-full"></div>
              <div className="absolute top-6 right-6 text-accent-600">
                <motion.div
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  <Trophy size={32} />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-semibold text-primary-800 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              <p className="text-sm font-medium text-gray-500">{achievement.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;