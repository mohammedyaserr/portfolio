import React from 'react';
import { motion } from 'framer-motion';
import { Launch, GitHub } from '@mui/icons-material';
import './Projects.css';

const Projects = () => {
  // You can easily update your projects, descriptions, tech stacks, and URLs here.
  const projectsData = [
    {
      title: "DevPulse – Developer Portfolio & Showcase",
      description: "A modern, high-performance portfolio platform built with React and Vite designed to showcase web engineering projects with fluid visual micro-interactions. Features WebGL line shaders, GSAP marquee animation ribbons, and Framer Motion layout transitions while adhering to strict accessibility standards. Optimized with structured JSON-LD schema, dynamic meta tags, and responsive layout scaling.",
      techStack: ["React", "Vite", "WebGL", "Framer Motion", "GSAP"],
      liveUrl: "https://mohammed-yaser-portfolio.vercel.app/",
      codeUrl: "https://github.com/mohammedyaserr/portfolio"
    },
    {
      title: "ShopStream – Full-Stack MERN E-Commerce Platform",
      description: "A full-featured e-commerce web application featuring dynamic catalog navigation, real-time product search, and state-managed cart workflows. Integrates secure RESTful API endpoints for user authentication, product inventory management, and simulated payment checkout pipelines. Engineered with responsive design patterns, Redux state slices, and modular component architecture.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      liveUrl: "https://github.com/mohammedyaserr",
      codeUrl: "https://github.com/mohammedyaserr"
    },
    {
      title: "TaskFlow – Collaborative Workflow & Task Tracker",
      description: "An intuitive project management dashboard created to help distributed teams organize tasks, monitor development milestones, and manage project statuses. Includes drag-and-drop workflow status boards, role-based JWT authentication, and optimized MongoDB query aggregation pipelines. Built with Material-UI and modern React hooks for smooth state handling.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
      liveUrl: "https://github.com/mohammedyaserr",
      codeUrl: "https://github.com/mohammedyaserr"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-label">Featured Work</span>
          <h2 className="projects-title">Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.article 
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-card-header">
                <span className="project-number">0{index + 1}</span>
                <div className="project-links">
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      className="project-icon-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <GitHub fontSize="small" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="project-icon-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <Launch fontSize="small" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              
              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer-actions">
                <a 
                  href={project.liveUrl} 
                  className="btn-project-live"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Open live application for ${project.title}`}
                >
                  Live Preview
                </a>
                <a 
                  href={project.codeUrl} 
                  className="btn-project-code"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Inspect source repository for ${project.title}`}
                >
                  Source Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
