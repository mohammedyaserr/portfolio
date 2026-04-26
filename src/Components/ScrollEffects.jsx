import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bolt, Person } from '@mui/icons-material';
import './ScrollEffects.css';

const ScrollEffects = () => {
  const [showEffects, setShowEffects] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolling up and not at the very top
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setShowEffects(true);
        // Hide after a short delay
        const timer = setTimeout(() => setShowEffects(false), 2000);
        return () => clearTimeout(timer);
      } else {
        setShowEffects(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showEffects && (
        <div className="scroll-effects-wrapper">
          {/* Character from left */}
          <motion.div 
            className="scroll-character"
            initial={{ x: -100, opacity: 0, rotate: -20 }}
            animate={{ x: 20, opacity: 1, rotate: 0 }}
            exit={{ x: -100, opacity: 0, rotate: -20 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <div className="character-avatar">
              <Person sx={{ fontSize: 60, color: '#fff' }} />
            </div>
            <div className="character-speech">Hey! Scrolling up?</div>
          </motion.div>

          {/* Thunder from right */}
          <motion.div 
            className="scroll-thunder"
            initial={{ x: 100, opacity: 0, scale: 0.5 }}
            animate={{ x: -20, opacity: 1, scale: 1.2 }}
            exit={{ x: 100, opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 150, damping: 8 }}
          >
            <Bolt sx={{ fontSize: 120, color: '#aa3bff' }} className="thunder-icon" />
            <div className="thunder-glow"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollEffects;
