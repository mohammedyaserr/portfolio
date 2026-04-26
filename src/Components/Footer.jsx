import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHub sx={{ fontSize: 20 }} />, href: "https://github.com/mohammedyaserr", label: "GitHub" },
    { icon: <LinkedIn sx={{ fontSize: 20 }} />, href: "https://www.linkedin.com/in/mohammed-yaser-59a044333/", label: "LinkedIn" },
    { icon: <Email sx={{ fontSize: 20 }} />, href: "mailto:mohammedyaserdev@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="footer-logo">Mohammed Yaser</h2>
        </motion.div>

        <div className="footer-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="footer-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="footer-socials">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="social-icon"
              whileHover={{ y: -5, color: '#aa3bff' }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Mohammed Yaser</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
