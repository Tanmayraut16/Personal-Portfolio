import React, { useState, useEffect } from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", offset: 0 },
    { id: "about", label: "About Me", offset: 50 },
    { id: "skills", label: "Skills", offset: 50 },
    { id: "work", label: "Portfolio", offset: 50 },
    { id: "contact", label: "Contact", offset: 50 }
  ];

  return (
    <nav className={`fixed top-0 left-0 py-2 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-lg' `}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="nav-logo flex items-center group">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Tanmay
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {navItems.map((item) => (
                <li key={item.id} className="mx-2">
                  <AnchorLink 
                    href={`#${item.id}`} 
                    offset={item.offset}
                  >
                    <p 
                      onClick={() => handleMenuClick(item.id)}
                      className={`font-medium py-2 px-3 rounded-md transition-all duration-300 ${
                        menu === item.id 
                          ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/10' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                      }`}
                    >
                      {item.label}
                    </p>
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <img 
                src={isMenuOpen ? menu_close : menu_open} 
                alt="Menu" 
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Connect Button (Desktop) */}
          <div className="hidden lg:block">
            <AnchorLink 
              href="#contact" 
              offset={50}
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium"
            >
              Connect With Me
            </AnchorLink>
          </div>
        </div>

        {/* Simple Mobile Menu - Dropdown style */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 rounded-b-lg shadow-lg">
            <div className="py-2">
              {navItems.map((item) => (
                <AnchorLink 
                  key={item.id}
                  href={`#${item.id}`} 
                  offset={item.offset}
                >
                  <div 
                    onClick={() => handleMenuClick(item.id)}
                    className={`py-3 px-4 ${
                      menu === item.id 
                        ? 'bg-blue-500/20 border-l-2 border-blue-500' 
                        : 'hover:bg-gray-800/30'
                    }`}
                  >
                    <p className={`${menu === item.id ? 'text-white' : 'text-gray-300'}`}>
                      {item.label}
                    </p>
                  </div>
                </AnchorLink>
              ))}
              
              {/* Connect Button (Mobile) */}
              <div className="px-4 py-3">
                <AnchorLink 
                  href="#contact" 
                  offset={50}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white font-medium"
                >
                  Connect With Me
                </AnchorLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;