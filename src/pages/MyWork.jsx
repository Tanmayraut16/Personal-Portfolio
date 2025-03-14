import React, { useState, useEffect, useCallback } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import mywork_data from "../assets/mywork_data";
import arrow_icon from "../assets/arrow_icon.svg";
import {
  MdArrowForward,
  MdArrowBack,
  MdCode,
  MdPlayArrow,
  MdPause,
  MdPlayCircle,
} from "react-icons/md";
import { ParticlesBackground } from "../Components/ParticlesBackground";

const MyWork = () => {
  const [mainProjectIndex, setMainProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeState, setFadeState] = useState("fade-in");
  const [autoRotate, setAutoRotate] = useState(true);
  const mainProject = mywork_data[mainProjectIndex];
  const otherProjects = mywork_data.filter((work) => work !== mainProject);

  // Handle continuous rotation
  const rotateProject = useCallback(() => {
    if (isTransitioning) return;

    setFadeState("fade-out");
    setIsTransitioning(true);

    setTimeout(() => {
      setMainProjectIndex((prevIndex) =>
        prevIndex === mywork_data.length - 1 ? 0 : prevIndex + 1
      );

      setTimeout(() => {
        setFadeState("fade-in");
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 50);
    }, 500);
  }, [isTransitioning]);

  // Setup auto-rotation interval
  useEffect(() => {
    let intervalId;

    if (autoRotate && !isTransitioning) {
      intervalId = setInterval(() => {
        rotateProject();
      }, 8000); // Change project every 8 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoRotate, isTransitioning, rotateProject]);

  // Handle clicking on the left arrow (previous project)
  const handlePrevProject = () => {
    if (isTransitioning) return;

    setFadeState("fade-out");
    setIsTransitioning(true);

    setTimeout(() => {
      setMainProjectIndex((prevIndex) =>
        prevIndex === 0 ? mywork_data.length - 1 : prevIndex - 1
      );

      setTimeout(() => {
        setFadeState("fade-in");
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 50);
    }, 500);
  };

  // Handle clicking on the right arrow (next project)
  const handleNextProject = () => {
    if (isTransitioning) return;

    setFadeState("fade-out");
    setIsTransitioning(true);

    setTimeout(() => {
      setMainProjectIndex((prevIndex) =>
        prevIndex === mywork_data.length - 1 ? 0 : prevIndex + 1
      );

      setTimeout(() => {
        setFadeState("fade-in");
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 50);
    }, 500);
  };

  // Handle clicking on a thumbnail
  const handleThumbnailClick = (index) => {
    if (isTransitioning) return;

    setFadeState("fade-out");
    setIsTransitioning(true);

    setTimeout(() => {
      setMainProjectIndex(index);

      setTimeout(() => {
        setFadeState("fade-in");
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 50);
    }, 500);
  };

  return (
    <div id="work" className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title Section */}
        <div className="relative mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block mb-6">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions, blending creativity and
            technology to build impactful applications.
          </p>
        </div>

        <ParticlesBackground />
        {/* Main Project Display */}
        <div
          className={`flex flex-col lg:flex-row gap-6 p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 shadow-lg border border-blue-500/10 transition-all duration-500 mb-12 ${
            fadeState === "fade-out"
              ? "opacity-0 -translate-x-5"
              : "opacity-100 translate-x-0"
          }`}
        >
          {/* Auto-rotate button */}
          <div
            className={`absolute top-4 right-4 z-10 ${
              autoRotate
                ? "bg-gradient-to-r from-blue-500/30 to-purple-600/30"
                : "bg-black/40"
            } rounded-full px-3 py-1.5 text-sm flex items-center gap-1 text-white/80 border border-white/10 cursor-pointer`}
            onClick={() => setAutoRotate(!autoRotate)}
          >
            {autoRotate ? <MdPause size={12} /> : <MdPlayCircle size={12} />}
          </div>

          {/* Project Image */}
          <div className="lg:w-1/2 overflow-hidden rounded-xl shadow-md">
            <img
              src={mainProject.w_img}
              alt={mainProject.w_name}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>

          {/* Project Details */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {mainProject.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4 text-white/90">
                {mainProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {mainProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500/15 to-purple-600/15 text-white py-1 px-3 rounded-full text-xs font-medium border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links & Navigation */}
            <div className="space-y-4">
              <div className="flex gap-3">
                {mainProject.github && (
                  <a
                    href={mainProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-full text-sm flex items-center justify-center shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <MdCode className="mr-2" /> GitHub
                  </a>
                )}
                {mainProject.live && (
                  <a
                    href={mainProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-full text-sm flex items-center justify-center shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <MdPlayArrow className="mr-2" /> Live Demo
                  </a>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center">
                <MdArrowBack
                  className="cursor-pointer bg-gradient-to-r from-blue-500/80 to-purple-600/80 p-1.5 rounded-full text-white hover:scale-110 transition-transform"
                  onClick={handlePrevProject}
                  size={24}
                />
                <span className="text-white/70 text-sm">
                  {mainProjectIndex + 1} / {mywork_data.length}
                </span>
                <MdArrowForward
                  className="cursor-pointer bg-gradient-to-r from-blue-500/80 to-purple-600/80 p-1.5 rounded-full text-white hover:scale-110 transition-transform"
                  onClick={handleNextProject}
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}

        <h3 className="text-xl md:text-2xl font-medium self-start pl-5 relative text-white after:content-[''] after:absolute after:bottom-[-10px] after:left-5 after:w-[50px] after:h-[3px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:rounded-md">
          Other Projects
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {otherProjects.slice(0, 4).map((work, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer border border-transparent hover:border-blue-500/50 transition-all duration-300"
              onClick={() =>
                !isTransitioning &&
                handleThumbnailClick(mywork_data.indexOf(work))
              }
            >
              <img
                src={work.w_img}
                alt={work.w_name}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-3 flex flex-col justify-end">
                <h4 className="text-sm font-bold text-white">{work.title}</h4>
                <p className="text-xs text-white/70">
                  {work.tech.slice(0, 2).join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Section */}
        <div className="flex justify-center items-center gap-3 cursor-pointer py-3 px-6 md:py-4 md:px-8 rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md mt-5">
          <p className="text-lg md:text-xl text-white font-bold">Show More</p>
          <img
            src={arrow_icon}
            alt="Show More"
            className="w-4 md:w-5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
