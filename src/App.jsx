import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import FlowingMenu from './Components/FlowingMenu/FlowingMenu';
import Contact from './Components/Contact/Contact';
import Loader from './Components/Loader';
import Footer from './Components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const demoItems = [
    { text: 'Full Stack', link: '#skills', image: 'https://picsum.photos/200/200?random=1' },
    { text: 'React Dev', link: '#projects', image: 'https://picsum.photos/200/200?random=2' },
    { text: 'UI Design', link: '#about', image: 'https://picsum.photos/200/200?random=3' },
    { text: 'Node.js', link: '#skills', image: 'https://picsum.photos/200/200?random=4' },
  ];

  useEffect(() => {
    // Simulate loading time for visual transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammed Yaser",
    "jobTitle": "Full Stack Developer",
    "url": "https://mohammed-yaser-portfolio.vercel.app/",
    "image": "https://mohammed-yaser-portfolio.vercel.app/og-image.png",
    "email": "mailto:mohammedyaserdev@gmail.com",
    "sameAs": [
      "https://github.com/mohammedyaserr",
      "https://www.linkedin.com/in/mohammed-yaser-59a044333/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thrissur",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Redux",
      "Material-UI",
      "Framer Motion",
      "REST APIs",
      "Full Stack Development",
      "MERN Stack"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Mohammed Yaser | Full Stack Developer (React, Node.js)</title>
        <meta 
          name="description" 
          content="Mohammed Yaser is a Full Stack Developer based in Thrissur, Kerala, India, building modern web apps with React, Node.js, Express, MongoDB, and JavaScript." 
        />
        <meta 
          name="keywords" 
          content="Mohammed Yaser, Full Stack Developer, React Developer, Node.js Developer, MERN Stack, Thrissur, Kerala, Web Developer Portfolio" 
        />
        <link rel="canonical" href="https://mohammed-yaser-portfolio.vercel.app/" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mohammed Yaser | Full Stack Developer (React, Node.js)" />
        <meta 
          property="og:description" 
          content="Mohammed Yaser is a Full Stack Developer based in Thrissur, Kerala, India, building modern web apps with React, Node.js, Express, MongoDB, and JavaScript." 
        />
        <meta property="og:url" content="https://mohammed-yaser-portfolio.vercel.app/" />
        <meta property="og:image" content="https://mohammed-yaser-portfolio.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mohammed Yaser - Full Stack Developer Portfolio" />
        <meta property="og:site_name" content="Mohammed Yaser Portfolio" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohammed Yaser | Full Stack Developer (React, Node.js)" />
        <meta 
          name="twitter:description" 
          content="Mohammed Yaser is a Full Stack Developer based in Thrissur, Kerala, India, building modern web apps with React, Node.js, Express, MongoDB, and JavaScript." 
        />
        <meta name="twitter:image" content="https://mohammed-yaser-portfolio.vercel.app/og-image.png" />
        <meta name="twitter:image:alt" content="Mohammed Yaser - Full Stack Developer Portfolio" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Preloader animation (fades out while content remains in DOM for SEO crawlers) */}
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      <div className="site-wrapper">
        <Navbar />
        <main id="main-content">
          <Home />
          <About />
          <Skills />
          <Projects />
          <FlowingMenu items={demoItems} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
