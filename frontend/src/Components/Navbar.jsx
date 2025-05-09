import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Code } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll for progress bar, active section, and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for the progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
      
      // Show/hide navbar based on scroll direction
      if (currentScroll > lastScrollY && currentScroll > 100) {
        // Scrolling down - hide navbar
        setNavbarVisible(false);
      } else {
        // Scrolling up - show navbar
        setNavbarVisible(true);
      }
      setLastScrollY(currentScroll);
      
      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "work", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md transition-transform duration-300 shadow-md ${
          navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Progress bar */}
        <div 
          className="h-1 bg-gradient-to-r from-cyan-500 to-indigo-600" 
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-cyan-400" />
            <span className="text-xl font-mono font-semibold">
              <span className="text-white">Tanmay</span>
              <span className="text-cyan-400">Dev</span>
            </span>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    px-4 py-2 text-sm font-mono rounded-md transition-all duration-300
                    ${activeSection === link.id 
                      ? 'bg-gray-800 text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }
                  `}
                >
                  {activeSection === link.id ? `<${link.label}/>` : link.label}
                </button>
              ))}
            </div>
          </nav>
          
          {/* Connect Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex px-5 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-md text-white font-mono font-medium items-center group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            {"<Contact/>"}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${mobileMenuOpen ? 'bg-gray-800' : 'bg-gray-800/50'} text-gray-300 hover:text-white transition-colors duration-300`}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-gray-900/98 backdrop-blur-xl transition-all duration-300 md:hidden
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{ paddingTop: '64px' }}
      >
        <div className="flex flex-col h-full px-6 pt-10 pb-20">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`
                  py-4 text-lg font-mono border-b border-gray-800 flex justify-between items-center transition-all duration-300
                  ${activeSection === link.id 
                    ? 'text-cyan-400' 
                    : 'text-gray-300'
                  }
                `}
              >
                {activeSection === link.id ? `<${link.label}/>` : link.label}
                {activeSection === link.id && (
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                )}
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('contact')}
              className={`
                py-4 text-lg font-mono border-b border-gray-800 flex justify-between items-center transition-all duration-300
                ${activeSection === 'contact' 
                  ? 'text-cyan-400' 
                  : 'text-gray-300'
                }
              `}
            >
              Contact
              {activeSection === 'contact' && (
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              )}
            </button>
          </div>
          
          <div className="mt-auto">
            <div className="font-mono text-xs text-gray-600 border-t border-gray-800 pt-4 mt-8">
              <div className="text-gray-500"># Code. Create. Innovate.</div>
              <div className="mt-2 text-cyan-500/70">$ whoami<span className="ml-2 text-gray-400">tanmay</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;