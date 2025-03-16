import React, { useEffect, useState } from "react";
import profile_img from "../assets/profile_img.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  // const [activeParticles, setActiveParticles] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

    // Activate particles after initial animations
    setTimeout(() => setActiveParticles(true), 1000);
  }, []);

  return (
    <div
      id="home"
      className={`flex flex-col items-center justify-center relative min-h-screen px-4 py-20 text-white transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
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
            opacity: 0.4;
            scale: 0.8;
          }
          100% {
            opacity: 0.8;
            scale: 1.2;
          }
        }
      `}</style>


      {/* Container with max width for content */}
      <div className="max-w-4xl w-full flex flex-col items-center z-10">
        {/* Profile image with animation */}
        <div className="relative mb-8 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div> */}
          <img
            src={profile_img}
            alt="Tanmay Raut"
            className="relative h-40 w-40 md:h-48 md:w-48 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>

        {/* Name and title with animation */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            I'm Tanmay Raut
          </span>
          <span className="block md:inline md:ml-2">
            A developer based in India
          </span>
        </h1>

        {/* Description with animation */}
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          Enthusiastic engineer starting a journey of crafting efficient
          solutions.
        </p>

        {/* Action buttons with animation */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
          <AnchorLink
            href="#contact"
            offset={50}
            className="group px-8 py-3 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 relative overflow-hidden"
          >Connect With Me
          </AnchorLink>

          <button className="group px-8 py-3 bg-transparent border-2 border-gray-300 hover:border-white rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            <span className="relative z-10">My Resume</span>
          </button>
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
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-16 animate-bounce hidden md:flex">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6 text-gray-400"
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
    </div>
  );
};

export default Hero;
