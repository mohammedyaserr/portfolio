import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHub sx={{ fontSize: 20 }} />, href: "https://github.com/mohammedyaserr", label: "Visit Mohammed Yaser on GitHub" },
    { icon: <LinkedIn sx={{ fontSize: 20 }} />, href: "https://www.linkedin.com/in/mohammed-yaser-59a044333/", label: "Connect with Mohammed Yaser on LinkedIn" },
    { icon: <Email sx={{ fontSize: 20 }} />, href: "mailto:mohammedyaserdev@gmail.com", label: "Send email to Mohammed Yaser" },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
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
          <span className="footer-logo">Mohammed Yaser</span>
        </motion.div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="footer-link"
              aria-label={`Jump to ${link.name} section`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="footer-socials" aria-label="Social media profiles">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="social-icon"
              whileHover={{ y: -5, color: '#aa3bff' }}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Mohammed Yaser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
