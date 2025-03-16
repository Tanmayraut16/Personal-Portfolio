import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Code2, Briefcase, Mail, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About Me", icon: User },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "work", label: "Portfolio", icon: Briefcase },
    // { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80; // Height of the navbar
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMenu(id);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tanmay
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${menu === item.id 
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                    }
                  `}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </button>
              );
            })}
            
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium flex items-center group"
            >
              Let's Connect
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          fixed inset-0 bg-gray-900/98 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ top: '80px' }}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200
                  ${menu === item.id 
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-l-2 border-blue-500' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }
                `}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="text-lg">{item.label}</span>
              </button>
            );
          })}
          
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium flex items-center justify-center group"
          >
            Let's Connect
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;