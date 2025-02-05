import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import PreLoader from './Components/Preloader/PreLoader';

const App = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    // Simulating the preloading process by waiting for 3 seconds (adjust as needed)
    setTimeout(() => {
      setIsPreloading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isPreloading && <PreLoader />} {/* Show PreLoader when isPreloading is true */}
      
      {/* Show main content after preloading is complete */}
      {!isPreloading && (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <MyWork />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
