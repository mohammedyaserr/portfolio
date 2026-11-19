import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

const FlowingMenu = ({ items = [] }) => {
  return (
    <div className="flowing-menu-container" aria-label="Specialization highlights">
      <nav className="flowing-menu">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem = ({ link, text, image }) => {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    const marquee = marqueeRef.current;
    const marqueeInner = marqueeInnerRef.current;

    if (!item || !marquee || !marqueeInner) return;

    // Create the infinite marquee animation
    const marqueeAni = gsap.to(marqueeInner, {
      xPercent: -50,
      repeat: -1,
      duration: 10,
      ease: 'none',
      paused: true
    });

    const onMouseEnter = () => {
      gsap.to(marquee, { opacity: 1, duration: 0.3 });
      marqueeAni.play();
    };

    const onMouseLeave = () => {
      gsap.to(marquee, { opacity: 0, duration: 0.3 });
      marqueeAni.pause();
    };

    item.addEventListener('mouseenter', onMouseEnter);
    item.addEventListener('mouseleave', onMouseLeave);

    return () => {
      item.removeEventListener('mouseenter', onMouseEnter);
      item.removeEventListener('mouseleave', onMouseLeave);
      marqueeAni.kill();
    };
  }, []);

  return (
    <div className="flowing-menu-item" ref={itemRef}>
      <a href={link} className="flowing-menu-link" aria-label={`Skill category: ${text}`}>
        <span className="flowing-menu-text">{text}</span>
      </a>
      <div className="flowing-menu-marquee" ref={marqueeRef} aria-hidden="true">
        <div className="flowing-menu-marquee-inner" ref={marqueeInnerRef}>
          {[...Array(8)].map((_, i) => (
            <span key={i} className="marquee-text">
              {text} 
              {image && (
                <img 
                  src={image} 
                  alt="" 
                  className="marquee-img" 
                  loading="lazy" 
                  width="200"
                  height="200"
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
