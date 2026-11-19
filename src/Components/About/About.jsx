import React from 'react';
import { motion } from 'framer-motion';
import { LocationOn, Work, School, Code } from '@mui/icons-material';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-label">Biography</span>
          <h2 className="about-title">About Me</h2>
        </motion.div>

        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="about-text-content">
            <p className="about-paragraph">
              I am Mohammed Yaser, a passionate Full Stack Developer based in Nilambur, Kerala, India. I specialize in building robust, modern web applications utilizing the MERN stack—MongoDB, Express.js, React, and Node.js—alongside JavaScript (ES6+), Redux, and responsive CSS frameworks.
            </p>
            <p className="about-paragraph">
              With a dedicated focus on frontend precision and clean backend API architecture, I enjoy transforming complex challenges into smooth, interactive, and high-performance digital products. My experience encompasses creating scalable web solutions with accessible code, intuitive user interfaces, and automated SEO best practices.
            </p>
            <p className="about-paragraph">
              I am currently open to full-time developer roles and freelance client collaborations where I can contribute to meaningful web applications, deliver clean and maintainable codebases, and continuously grow alongside forward-thinking engineering teams.
            </p>
          </div>

          <div className="about-highlights-grid">
            <div className="about-highlight-item">
              <div className="highlight-icon">
                <LocationOn />
              </div>
              <div className="highlight-info">
                <span className="highlight-label">Location</span>
                <span className="highlight-value">Nilambur, Kerala, India</span>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-icon">
                <Code />
              </div>
              <div className="highlight-info">
                <span className="highlight-label">Specialization</span>
                <span className="highlight-value">MERN &amp; Full Stack</span>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-icon">
                <Work />
              </div>
              <div className="highlight-info">
                <span className="highlight-label">Looking For</span>
                <span className="highlight-value">Full-Time &amp; Freelance</span>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-icon">
                <School />
              </div>
              <div className="highlight-info">
                <span className="highlight-label">Focus</span>
                <span className="highlight-value">Performance &amp; UX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
