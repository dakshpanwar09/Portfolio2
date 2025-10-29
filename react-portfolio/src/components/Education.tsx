import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <motion.section
      id="education"
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
          Education
        </motion.h2>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>B.TECH in Computer Science</h3>
          <p>Dr. A.P.J. Abdul Kalam Technical University</p>
          <p>Sept 2021 - June 2025</p>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Higher Secondary Certificate & Secondary School Certificate</h3>
          <p>BAL BHARATI PUBLIC SCHOOL</p>
          <p>Sept 2007 - June 2021</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
