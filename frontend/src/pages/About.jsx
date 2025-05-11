import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Terminal,
  Award,
  Calendar,
  MapPin,
  Code,
  GitBranch,
  Coffee,
  Server,
  Cpu,
} from "lucide-react";
import profile_img from "../assets/profile_img.png";

function About() {
  const [activeTab, setActiveTab] = useState("experience");
  const [isVisible, setIsVisible] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  // Terminal animation effect
  useEffect(() => {
    const lines = [
      { text: "tanmay@dev:~$ whoami", delay: 500 },
      { text: "Full Stack Developer with a passion for Java & Web Development", delay: 1200 },
      { text: "tanmay@dev:~$ cat skills.txt", delay: 500 },
      { text: "Java • JavaScript • React • Node.js • DSA", delay: 1200 },
      { text: "tanmay@dev:~$ _", delay: 0 }
    ];

    if (isVisible && terminalLines.length < lines.length) {
      const timer = setTimeout(() => {
        if (currentLine < lines.length) {
          setTerminalLines((prev) => [...prev, lines[currentLine].text]);
          setCurrentLine((prev) => prev + 1);
        }
      }, lines[currentLine]?.delay || 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, terminalLines, currentLine]);

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

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen py-10 sm:py-20 px-3 sm:px-4 md:px-8 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="h-px w-8 bg-cyan-500"></div>
              <Code className="text-cyan-500 w-5 h-5" />
              <div className="h-px w-8 bg-cyan-500"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-mono font-bold text-white">
              <span className="text-cyan-400">&lt;</span>
              about
              <span className="text-cyan-400">/&gt;</span>
            </h1>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Profile section */}
          <div
            className={`lg:col-span-4 ${
              isVisible ? "animate-fade-right" : "opacity-0"
            }`}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 shadow-lg">
              <div className="relative group max-w-xs mx-auto lg:mx-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl opacity-50 blur-sm group-hover:opacity-75 transition duration-500"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src={profile_img}
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40"></div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-mono font-bold text-white">
                    Tanmay Raut
                  </h2>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <div className="font-mono p-2 sm:p-3 bg-gray-900/80 rounded-lg border border-gray-700/50 text-xs sm:text-sm">
                  {terminalLines.map((line, index) => (
                    <div
                      key={index}
                      className={
                        index % 2 === 0 ? "text-cyan-400" : "text-gray-300"
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Maharashtra, India</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a href="mailto:hitanmayraut@gmail.com" className="bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 px-2 py-1 rounded-md transition-colors">
                    Email
                  </a>
                  <a href="#" className="bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 px-2 py-1 rounded-md transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 px-2 py-1 rounded-md transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 px-2 py-1 rounded-md transition-colors">
                    LeetCode
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline section */}
          <div
            className={`lg:col-span-8 ${
              isVisible ? "animate-fade-left" : "opacity-0"
            }`}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 border border-gray-700/50 shadow-lg">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 font-mono">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`flex items-center px-3 sm:px-4 py-2 rounded-md transition-all duration-300 text-xs sm:text-sm ${
                    activeTab === "experience"
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      : "text-gray-400 hover:text-white border border-gray-700"
                  }`}
                >
                  <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  experience.js
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`flex items-center px-3 sm:px-4 py-2 rounded-md transition-all duration-300 text-xs sm:text-sm ${
                    activeTab === "education"
                      ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30"
                      : "text-gray-400 hover:text-white border border-gray-700"
                  }`}
                >
                  <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  education.js
                </button>
              </div>

              {/* File path bar */}
              <div className="flex items-center mb-4 bg-gray-900/80 py-1 sm:py-2 px-2 sm:px-3 rounded-md border border-gray-700/50 text-xs font-mono text-gray-400 overflow-x-auto">
                <span className="text-cyan-400">~/career/</span>
                {activeTab === "experience" ? "experience.js" : "education.js"}
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                {activeTab === "experience" ? (
                  <>
                    <TimelineItem
                      title="Technical Head"
                      organization="Information Technology Student Association (ITSA) Club"
                      date="Sept 2024 - May 2025"
                      description="Led the ITSA Club to recognition as the best departmental club, overseeing 10+ activities. Coordinated coding challenges, seminars, and technical events with 200+ participants."
                      icon={<Server className="w-4 h-4" />}
                      color="cyan"
                    />
                    <TimelineItem
                      title="Java Intern"
                      organization="Oasis Infobyte"
                      date="September - October 2023"
                      description="Developed Java applications and solutions, working on real-world projects."
                      icon={<Cpu className="w-4 h-4" />}
                      color="indigo"
                    />
                  </>
                ) : (
                  <>
                    <TimelineItem
                      title="B-Tech in Information Technology"
                      organization="SGGS Institute of Engineering and Technology"
                      date="2022 - 2026 (Expected)"
                      description="CGPA - 8.70 / 10.0"
                      icon={<GraduationCap className="w-4 h-4" />}
                      color="cyan"
                    />
                    <TimelineItem
                      title="12th Standard"
                      organization="Shri Datta Vidya Mandir"
                      date="2020 - 2022"
                      description="Percentage - 88.4%"
                      icon={<Award className="w-4 h-4" />}
                      color="indigo"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-gray-800/70 rounded-lg p-3 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <div className="text-xs text-gray-500 font-mono">
                    var leetcode =
                  </div>
                </div>
                <div className="mt-2 text-lg sm:text-xl text-white font-mono font-bold">
                  600+
                </div>
                <div className="text-xs text-gray-400">
                  Problems Solved (Rating: 1530)
                </div>
              </div>
              <div className="bg-gray-800/70 rounded-lg p-3 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                  <div className="text-xs text-gray-500 font-mono">
                    var achievements =
                  </div>
                </div>
                <div className="mt-2 text-lg sm:text-xl text-white font-mono font-bold">
                  #1
                </div>
                <div className="text-xs text-gray-400">
                  Rank in Institute DSA Contest
                </div>
              </div>
              <div className="bg-gray-800/70 rounded-lg p-3 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                  <div className="text-xs text-gray-500 font-mono">
                    var projects =
                  </div>
                </div>
                <div className="mt-2 text-lg sm:text-xl text-white font-mono font-bold">
                  10+
                </div>
                <div className="text-xs text-gray-400">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        .animate-fade-right {
          animation: fade-right 0.6s ease-out forwards;
        }
        .animate-fade-left {
          animation: fade-left 0.6s ease-out forwards;
        }
      `}</style>

      {/* Decorative Elements */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

function TimelineItem({ title, organization, date, description, icon, color }) {
  return (
    <div
      className={`relative pl-6 sm:pl-8 before:absolute before:left-2 before:top-2 before:w-px before:h-full before:bg-gray-700/50`}
    >
      <div
        className={`absolute left-0 top-2 w-4 h-4  rounded-full bg-${color}-500/20 border border-${color}-500/50 flex items-center justify-center text-${color}-400`}
      >
        {icon}
      </div>
      <div className="bg-gray-800/50 rounded-lg p-3 sm:p-5 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
        <div className="flex items-center text-gray-400 text-xs sm:text-sm mb-2 font-mono">
          <Calendar className="w-3 h-3 mr-1 sm:mr-2 flex-shrink-0" />
          {date}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
          {title}
        </h3>
        <div className="text-gray-400 font-mono text-xs sm:text-sm mb-2 sm:mb-3">
          {organization}
        </div>
        <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
}

function SkillBadge({ name, level, color }) {
  return (
    <div className="bg-gray-800/60 border border-gray-700/50 rounded-lg p-3 hover:bg-gray-800/80 transition-all duration-300">
      <div className="font-mono text-gray-300 mb-1 text-xs sm:text-sm">
        {name}
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-1.5 mb-1">
        <div
          className={`bg-${color}-500 h-1.5 rounded-full`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <div className="text-xs text-right font-mono text-gray-500">{level}%</div>
    </div>
  );
}

export default About;
