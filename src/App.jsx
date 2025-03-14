import React, { useState, useEffect } from "react";
import PreLoader from "./Components/Preloader/PreLoader";
import Navbar from "./Components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    // Simulating the preloading process by waiting for 3 seconds (adjust as needed)
    setTimeout(() => {
      setIsPreloading(false);
    }, 3000);
  }, []);

  if (isPreloading)
    return (
      <div className="w-full bg-gradient-to-b from-gray-900 to-black min-h-screen overflow-hidden">
        <PreLoader />
      </div>
    );

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <MyWork />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;