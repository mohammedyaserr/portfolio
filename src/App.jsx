import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import FlowingMenu from './Components/FlowingMenu/FlowingMenu';
import Loader from './Components/Loader';
import Footer from './Components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const demoItems = [
    { text: 'Full Stack', link: '#', image: 'https://picsum.photos/200/200?random=1' },
    { text: 'React Dev', link: '#', image: 'https://picsum.photos/200/200?random=2' },
    { text: 'UI Design', link: '#', image: 'https://picsum.photos/200/200?random=3' },
    { text: 'Node.js', link: '#', image: 'https://picsum.photos/200/200?random=4' },
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Home />
            <Skills />
            <FlowingMenu items={demoItems} />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
