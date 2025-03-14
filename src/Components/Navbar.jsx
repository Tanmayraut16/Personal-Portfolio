import React, { useState, useEffect } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
    // Prevent body scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

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
    { id: "contact", label: "Contact", offset: 50 },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-gray-900/70'} transition-all duration-300`}>
      <div className="w-full mx-auto px-4 max-w-screen-lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tanmay
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {navItems.map((item) => (
                <li key={item.id} className="mx-2">
                  <AnchorLink href={`#${item.id}`} offset={item.offset}>
                    <p
                      onClick={() => handleMenuClick(item.id)}
                      className={`font-medium py-2 px-3 rounded-md transition-all duration-300 ${
                        menu === item.id
                          ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/10"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/30"
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
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2 rounded-md"
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
      </div>

      {/* Mobile Menu - Fixed Position Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900/95 z-40 h-full w-full flex flex-col justify-start pt-16 overflow-y-auto">
          <div className="w-full mx-auto px-4 max-w-screen-lg">
            {navItems.map((item) => (
              <AnchorLink
                key={item.id}
                href={`#${item.id}`}
                offset={item.offset}
              >
                <div
                  onClick={() => handleMenuClick(item.id)}
                  className={`py-4 my-1 px-4 rounded-lg transition-all duration-200 ${
                    menu === item.id
                      ? "bg-blue-500/20 border-l-2 border-blue-500"
                      : "hover:bg-gray-800/30"
                  }`}
                >
                  <p
                    className={`text-lg ${
                      menu === item.id ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              </AnchorLink>
            ))}

            {/* Connect Button (Mobile) */}
            <div className="px-4 py-6">
              <AnchorLink
                href="#contact"
                offset={50}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white font-medium"
              >
                Connect With Me
              </AnchorLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;