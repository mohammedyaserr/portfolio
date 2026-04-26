import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Storage, 
  Terminal, 
  Layers, 
  DataObject, 
  Settings, 
  Web, 
  AutoAwesome 
} from '@mui/icons-material';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', category: 'Frontend', icon: <Code /> },
    { name: 'Node.js', category: 'Backend', icon: <Settings /> },
    { name: 'MongoDB', category: 'Database', icon: <Storage /> },
    { name: 'JavaScript', category: 'Language', icon: <Terminal /> },
    { name: 'Express', category: 'Backend', icon: <Layers /> },
    { name: 'Redux', category: 'State', icon: <DataObject /> },
    { name: 'MUI', category: 'UI', icon: <Web /> },
    { name: 'Framer Motion', category: 'Animation', icon: <AutoAwesome /> },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="skills-label">Capabilities</span>
          <h2 className="skills-title">Tech Stack</h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -5,
                borderColor: '#aa3bff',
                boxShadow: '0 0 20px rgba(170, 59, 255, 0.2)'
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
