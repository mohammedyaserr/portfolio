import React from 'react';
import { motion } from 'framer-motion';
import { Email, LocationOn, GitHub, LinkedIn, Send } from '@mui/icons-material';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-label">Get In Touch</span>
          <h2 className="contact-title">Contact</h2>
        </motion.div>

        <div className="contact-content-grid">
          <motion.div 
            className="contact-main-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="contact-card-heading">Let's build something remarkable together.</h3>
            <p className="contact-description">
              I am actively seeking full-time Full Stack Developer opportunities and freelance client collaborations. Whether you have a project idea, a position to discuss, or simply want to connect, feel free to send me a message.
            </p>

            <div className="contact-action-wrapper">
              <a 
                href="mailto:mohammedyaserdev@gmail.com" 
                className="btn-primary contact-cta-btn"
                aria-label="Send direct email to Mohammed Yaser"
              >
                <Send fontSize="small" />
                <span>Say Hello</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-details-column"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <a 
              href="mailto:mohammedyaserdev@gmail.com" 
              className="contact-info-card"
              aria-label="Email: mohammedyaserdev@gmail.com"
            >
              <div className="contact-info-icon">
                <Email />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Direct Email</span>
                <span className="contact-info-val">mohammedyaserdev@gmail.com</span>
              </div>
            </a>

            <div className="contact-info-card static-card">
              <div className="contact-info-icon">
                <LocationOn />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-val">Thrissur, Kerala, India</span>
              </div>
            </div>

            <div className="contact-social-row">
              <a 
                href="https://github.com/mohammedyaserr" 
                className="contact-social-btn"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Mohammed Yaser on GitHub"
              >
                <GitHub />
                <span>GitHub</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/mohammed-yaser-59a044333/" 
                className="contact-social-btn"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with Mohammed Yaser on LinkedIn"
              >
                <LinkedIn />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
