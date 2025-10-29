import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const certifications = [
    'Certified Salesforce AI Associate',
    'Data Structures and Algorithms in Java',
    'Certified Salesforce AI Specialist',
    'Kodnest Full Stack Development',
    'Python Development'
  ];

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        <motion.ul
          className="certifications-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {cert}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Certifications;
