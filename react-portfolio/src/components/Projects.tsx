import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CRM System for Expense Management',
      description: 'This project involved developing a custom CRM system on the Salesforce platform. The system was designed to allow employees to log and maintain records of expenses incurred during client visits or business trips. It streamlined expense tracking, approval workflows, and reporting for the organization, ensuring transparency and ease of management.',
      tools: 'Salesforce Platform, Apex Code, Lightning Components, Visualforce Pages'
    },
    {
      title: 'Skill Forge',
      description: 'Developed a dynamic e-learning platform with a user-friendly interface for learning and skill development. Implemented features for user authentication, course catalog management, and progress tracking. Utilized a full-stack approach with a React frontend and Java Spring Boot backend.',
      tools: ''
    },
    {
      title: 'News Portal',
      description: 'Developed a dynamic news portal that aggregates and displays news articles from various sources, providing users with a seamless browsing experience. Implemented features such as category-based filtering, search functionality, and real-time updates.',
      tools: 'HTML, CSS, JavaScript, PHP, MySQL, AJAX, Bootstrap'
    }
  ];

  return (
    <motion.section
      id="projects"
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
          Projects
        </motion.h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tools && <p><strong>Tools Used:</strong> {project.tools}</p>}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
