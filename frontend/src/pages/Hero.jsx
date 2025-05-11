import React, { useEffect, useState } from "react";
import profile_img from "../assets/profile_img.png";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaDatabase } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineer | Full Stack Developer | Tech Enthusiast";
  const typingSpeed = 60; // milliseconds per character

  // Define the handleRedirect function
  const handleRedirect = (platform) => {
    switch (platform) {
      case "github":
        window.open("https://github.com/Tanmayraut16", "_blank");
        break;
      case "linkedin":
        window.open(
          "https://www.linkedin.com/in/tanmay-raut-416303257",
          "_blank"
        );
        break;
      case "twitter":
        window.open("https://twitter.com", "_blank");
        break;
      default:
        break;
    }
  };

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const animationElements = document.querySelectorAll(".animate-on-load");

    animationElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("opacity-0");
        element.classList.remove("translate-y-10");
        element.classList.add("opacity-100");
        element.classList.add("translate-y-0");
      }, 200 * index);
    });
  }, []);

  
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center relative min-h-screen px-4 py-20 text-white transition-opacity duration-500 "
    >

      {/* Floating animation styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(
                ${Math.random() * 100 - 50}px,
                ${Math.random() * 100 - 50}px
              )
              rotate(${Math.random() * 360}deg);
          }
        }
        @keyframes pulse {
          0% {
            opacity: 0.1;
            scale: 0.9;
          }
          100% {
            opacity: 0.3;
            scale: 1.1;
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Container with max width for content */}
      <div className="max-w-4xl w-full flex flex-col items-center z-10">
        {/* Tech Icons above profile */}
        <div className="flex justify-center gap-8 mb-6 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          <FaCode className="text-blue-400 text-2xl md:text-3xl" />
          <FaServer className="text-purple-400 text-2xl md:text-3xl" />
          <FaDatabase className="text-green-400 text-2xl md:text-3xl" />
        </div>
        
        {/* Profile image with animation */}
        <div className="relative mb-8 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
          <img
            src={profile_img}
            alt="Tanmay Raut"
            className="relative h-40 w-40 md:h-48 md:w-48 rounded-full object-cover border-4 border-gray-800 shadow-xl"
          />
        </div>

        {/* Name with code-like formatting */}
        <div className="font-mono text-xl md:text-2xl mb-4 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-gray-400">const</span> <span className="text-yellow-400">developer</span> <span className="text-white">=</span> <span className="text-green-400">"Tanmay Raut"</span><span className="text-white animation-blink">;</span>
        </div>

        {/* Name and title with animation */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tanmay Raut
          </span>
        </h1>

        {/* Typewriter effect for role description */}
        <div className="h-8 text-lg md:text-xl text-center mb-6 animate-on-load opacity-0 translate-y-10 transition-all duration-700 font-mono">
          {typedText}
          <span className="inline-block w-2 h-5 bg-blue-400 ml-1" style={{ animation: 'blink 1s step-end infinite' }}></span>
        </div>

        {/* Description with animation */}
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          Building digital solutions with clean code and innovative approaches.
          Focused on creating efficient, scalable, and user-friendly applications.
        </p>

        {/* Action buttons with animation */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          <AnchorLink
            href="#projects"
            offset={50}
            className="group px-8 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-700 rounded-md font-mono text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 relative overflow-hidden"
          >
            <span className="relative z-10">View My Projects</span>
          </AnchorLink>

          <AnchorLink
            href="#contact"
            offset={50}
            className="group px-8 py-3 bg-transparent border-2 border-blue-500 hover:border-blue-400 rounded-md font-mono text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/10 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            <span className="relative z-10">Let's Connect</span>
          </AnchorLink>
        </div>

        {/* Social icons with animation */}
        <div className="flex space-x-6 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          <FaGithub
            onClick={() => handleRedirect("github")}
            className="text-2xl md:text-3xl cursor-pointer hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12"
          />
          <FaLinkedin
            onClick={() => handleRedirect("linkedin")}
            className="text-2xl md:text-3xl cursor-pointer hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-rotate-12"
          />
          <FaTwitter
            onClick={() => handleRedirect("twitter")}
            className="text-2xl md:text-3xl cursor-pointer hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12"
          />
        </div>

        {/* Scroll indicator animation */}
        <div className="absolute bottom-10 transform -translate-x-1/2 flex flex-col items-center mt-16 animate-bounce md:flex">
          <span className="text-sm text-gray-400 mb-2 font-mono">// scroll down</span>
          <svg
            className="w-6 h-6 text-blue-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default Hero;