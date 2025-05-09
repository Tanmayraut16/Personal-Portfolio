import React, { useState, useEffect, useRef } from "react";
import { 
  Code,
  ExternalLink,
  Info,
  Layers,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";
import mywork_data from "../assets/mywork_data";

const MyWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const workSection = document.getElementById("work");
    if (workSection) {
      observer.observe(workSection);
    }

    return () => {
      if (workSection) {
        observer.unobserve(workSection);
      }
    };
  }, []);

  // Get visible projects (center and adjacent projects)
  const getVisibleProjects = () => {
    const projectCount = mywork_data.length;
    const projects = [];
    
    // Get main visible projects (center and adjacent)
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projectCount) % projectCount;
      projects.push({
        ...mywork_data[index],
        position: i // -1 = left, 0 = center, 1 = right
      });
    }
    
    return projects;
  };

  // Handle navigation with transition blocking
  const navigate = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setCurrentIndex(prevIndex => {
      const projectCount = mywork_data.length;
      if (direction === "next") {
        return (prevIndex + 1) % projectCount;
      } else {
        return (prevIndex - 1 + projectCount) % projectCount;
      }
    });
    
    // Reset autoplay timer when user navigates manually
    setAutoPlay(true);
    
    // Prevent rapid navigation during transitions
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  // Handle project selection
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    setAutoPlay(false);
  };

  // Handle mouse/touch events for dragging
  const handleDragStart = (e) => {
    if (isTransitioning) return;
    
    setIsDragging(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
    setAutoPlay(false); // Pause autoplay when user starts dragging
  };

  const handleDragMove = (e) => {
    if (!isDragging || isTransitioning) return;
    
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const diff = currentX - startX;
    
    // Use a threshold to prevent accidental swipes
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        navigate("prev");
      } else {
        navigate("next");
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setAutoPlay(true); // Resume autoplay when user stops dragging
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        navigate("prev");
      } else if (e.key === "ArrowRight") {
        navigate("next");
      } else if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  // Auto-rotate carousel every 5 seconds when not interacting
  useEffect(() => {
    let interval;
    
    if (autoPlay && !showModal && !isDragging && !isTransitioning) {
      interval = setInterval(() => {
        navigate("next");
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoPlay, showModal, isDragging, isTransitioning]);

  // Pause autoplay when user hovers over carousel
  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  // Get the visible projects
  const visibleProjects = getVisibleProjects();
  
  // Handle modal closing
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300); // Wait for fade-out animation
  };
  
  return (
    <div
      id="work"
      className="min-h-screen py-20 px-4 md:px-8 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="h-px w-8 bg-cyan-500"></div>
              <Code className="text-cyan-500 w-5 h-5" />
              <div className="h-px w-8 bg-cyan-500"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-white">
              <span className="text-cyan-400">&lt;</span>
              projects
              <span className="text-cyan-400">/&gt;</span>
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
            A showcase of my best work, blending creativity and
            technology to build meaningful applications.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className={`relative h-[550px] mb-16 select-none ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
        >
          {/* Control Buttons */}
          <button 
            onClick={() => navigate("prev")}
            className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/80 backdrop-blur-sm text-cyan-400 rounded-full p-3 opacity-80 hover:opacity-100 transition-all shadow-lg border border-gray-700/50 hover:scale-110 active:scale-90"
            aria-label="Previous project"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={() => navigate("next")}
            className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/80 backdrop-blur-sm text-cyan-400 rounded-full p-3 opacity-80 hover:opacity-100 transition-all shadow-lg border border-gray-700/50 hover:scale-110 active:scale-90"
            aria-label="Next project"
          >
            <ChevronRight size={28} />
          </button>

          {/* Carousel Items with 3D effect */}
          <div className="flex justify-center items-center h-full perspective-1000">
            {visibleProjects.map((project) => {
              // Define position-based styling
              const isCenter = project.position === 0;
              
              // Calculate styles based on position
              const xPosition = project.position * 400;
              const scale = isCenter ? 1 : 0.75;
              const opacity = isCenter ? 1 : 0.5;
              const zIndex = isCenter ? 10 : 5;
              const rotateY = project.position * 10;
              
              return (
                <div
                  key={`${project.title}-${project.position}`}
                  className="absolute origin-center transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(${xPosition}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity: opacity,
                    zIndex: zIndex
                  }}
                >
                  <div 
                    className={`w-[320px] md:w-[500px] bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 border border-gray-700/50 shadow-lg ${
                      isCenter 
                        ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-2' 
                        : 'pointer-events-none filter contrast-75'
                    }`}
                    onClick={() => isCenter && handleProjectClick(project)}
                  >
                    {/* Project Image with Gradient Overlay */}
                    <div className="relative h-[280px] md:h-[320px] overflow-hidden">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl opacity-30 blur-sm group-hover:opacity-75 transition duration-500"></div>
                      <img
                        src={project.w_img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex items-end p-6">
                        <div>
                          <h3 className="text-2xl font-bold font-mono text-white">{project.title}</h3>
                          {isCenter && (
                            <div className="flex items-center mt-2">
                              <span className="text-sm text-gray-300 mr-2">View Details</span>
                              <span className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                                <ExternalLink size={14} className="text-white" />
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech Tags */}
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-700/50 text-cyan-400 py-1 px-3 rounded-md text-xs font-mono border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-gray-400 text-xs font-mono">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className={`flex justify-center gap-2 mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {mywork_data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'bg-cyan-500 w-8 h-2' 
                  : 'bg-gray-600 hover:bg-gray-400 w-2 h-2'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Swipe Instruction for Mobile */}
        <div className={`text-center text-gray-400 text-sm mb-10 md:hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p>← Swipe to navigate projects →</p>
        </div>

        {/* Project Details Modal with CSS transitions instead of framer-motion */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 opacity-100"
            onClick={closeModal}
          >
            <div
              className="bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 opacity-100 scale-100 translate-y-0 border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject && (
                <>
                  {/* Modal Header with Hero Image */}
                  <div className="relative">
                    <img 
                      src={selectedProject.w_img} 
                      alt={selectedProject.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    
                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 bg-gray-800/80 text-cyan-400 rounded-full p-2 transition-all hover:scale-110 active:scale-90 border border-gray-700/50"
                      aria-label="Close modal"
                    >
                      <X size={24} />
                    </button>
                    
                    {/* Project Title on Image */}
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-1">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>
                  
                  {/* Modal Content */}
                  <div className="p-8">
                    {/* Description with Icon */}
                    <div className="mb-8">
                      <h3 className="text-xl font-medium text-white mb-4 flex items-center font-mono">
                        <span className="bg-gray-800/80 border border-cyan-500/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-cyan-400">
                          <Info size={16} />
                        </span>
                        About This Project
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    {/* Tech Stack with Icon */}
                    <div className="mb-8">
                      <h3 className="text-xl font-medium text-white mb-4 flex items-center font-mono">
                        <span className="bg-gray-800/80 border border-cyan-500/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-cyan-400">
                          <Layers size={16} />
                        </span>
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-800/70 text-gray-300 py-2 px-4 rounded-md text-sm font-mono border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800/70 text-cyan-400 border border-cyan-500/30 py-3 px-6 rounded-md font-medium flex items-center justify-center transition-all hover:-translate-y-1 font-mono"
                        >
                          <Code className="mr-2" size={20} /> View Code
                        </a>
                      )}
                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 py-3 px-6 rounded-md font-medium flex items-center justify-center transition-all hover:-translate-y-1 font-mono"
                        >
                          <ExternalLink className="mr-2" size={20} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;