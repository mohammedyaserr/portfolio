import React from 'react';
import { motion } from 'framer-motion';
import LineWaves from './LineWaves';
import './home.css';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="line-waves-wrapper">
        <LineWaves
          speed={0.3}
          innerLineCount={14}
          outerLineCount={7}
          warpIntensity={0.5}
          rotation={-51}
          edgeFadeWidth={0.15}
          colorCycleSpeed={1}
          brightness={0.15}
          color1="#ff6bdf"
          color2="#ffffff"
          color3="#aa3bff"
          enableMouseInteraction={true}
          mouseInfluence={1.1}
        />
      </div>
      
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          className="home-greeting"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hey there, I'm
        </motion.span>
        
        <h1 className="home-title">
          Mohammed <span className="text-accent">Yaser</span>
        </h1>
        
        <motion.div 
          className="home-subtitle-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="home-role">Full Stack Developer</span>
          <p className="home-subtitle">Specializing in building fast, scalable, and user-focused web applications with React.</p>
        </motion.div>

        <motion.div 
          className="home-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="mailto:mohammedyaserdev@gmail.com" className="btn-secondary">Hire Me</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
