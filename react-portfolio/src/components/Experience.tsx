import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <motion.section
      id="experience"
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
          Experience
        </motion.h2>
        <motion.div
          className="experience-item"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Software Engineer Intern</h3>
          <p>TechShinry</p>
          <p>Sept 2024 - May 2025</p>
          <ul>
            <li>Worked on real-world projects integrating Salesforce and MuleSoft to streamline business operations.</li>
            <li>Salesforce: Customized CRM, created custom objects, workflows, auto-triggered business processes. Developed Apex triggers and dashboards.</li>
            <li>MuleSoft: Designed and implemented APIs. Conducted data transformations using DataWeave and ensured data flow integrity.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
