import { useState, useEffect } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Code,
  Mail,
  ExternalLink,
  Award,
  Briefcase,
} from "lucide-react";
import profile_img from "../assets/profile_img.png";
import banner from "../assets/leetcode_banner.png";
import PropTypes from "prop-types";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("education");

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
      { threshold: 0.1 }
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
      className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-cyan-500"></div>
            <Code className="text-cyan-500 w-6 h-6" />
            <div className="w-8 h-px bg-cyan-500"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-white">
            <span className="text-cyan-400">&lt;</span>
            about
            <span className="text-cyan-400"> /&gt;</span>
          </h1>
          <p className="text-gray-400 font-mono text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            // Building digital solutions with passion and precision
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Card */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 sticky top-8">
              {/* Profile Image */}
              <div className="relative mb-16 group">
                <div className="relative h-24 sm:h-28 w-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 group-hover:opacity-50 transition duration-500">
                    <img
                      src={banner}
                      alt="LeetCode Streak Banner"
                      className="w-full h-full object-fill object-left"
                    />
                  </div>
                </div>

                {/* Profile image container - positioned to overlap banner */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 sm:-bottom-12 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden z-10 ">
                  <img
                    src={profile_img}
                    alt="Tanmay Raut"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-mono font-bold text-white mb-2">
                  Tanmay Raut
                </h2>
                <p className="text-cyan-400 font-mono text-sm">
                  Full Stack Developer
                </p>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/Tanmayraut16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-700/50 hover:bg-gray-700/80 text-gray-300 text-xs font-mono py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://leetcode.com/u/Tanmay_Raut16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-700/50 hover:bg-gray-700/80 text-gray-300 text-xs font-mono py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  LeetCode
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* About Text */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 mb-8">
              <div className="flex justify-end space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-6">
                <span className="text-cyan-400">const</span> aboutMe = {"{"}
              </h3>
              <div className="pl-4 space-y-4 text-gray-300 leading-relaxed">
                <p className="text-sm sm:text-base">
                  <span className="text-yellow-400 font-mono">passion:</span>
                  <span className="text-green-400">
                    {" "}
                    "Building innovative digital solutions"
                  </span>
                  ,
                </p>
                <p className="text-sm sm:text-base">
                  <span className="text-yellow-400 font-mono">expertise:</span>
                  <span className="text-green-400">
                    {" "}
                    "Full Stack Development & Problem Solving"
                  </span>
                  ,
                </p>
                <p className="text-sm sm:text-base">
                  <span className="text-yellow-400 font-mono">focus:</span>
                  <span className="text-green-400">
                    {" "}
                    "Clean code, scalable architecture"
                  </span>
                  ,
                </p>
                <p className="text-sm sm:text-base">
                  <span className="text-yellow-400 font-mono">goal:</span>
                  <span className="text-green-400">
                    {" "}
                    "Creating impactful user experiences"
                  </span>
                </p>
              </div>
              <p className="text-white font-mono mt-4">{"};"}</p>
            </div>
          </div>

          {/* Content Area */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveSection("education")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm whitespace-nowrap transition-all duration-300 ${
                  activeSection === "education"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                education.js
              </button>
              <button
                onClick={() => setActiveSection("experience")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm whitespace-nowrap transition-all duration-300 ${
                  activeSection === "experience"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                experience.js
              </button>
            </div>

            {/* Content Sections */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 mb-8">
              <div className="mb-4 bg-gray-900/80 py-2 px-3 rounded-lg border border-gray-700/50">
                <span className="text-cyan-400 font-mono text-xs">
                  ~/career/
                </span>
                <span className="text-gray-400 font-mono text-xs">
                  {activeSection === "education"
                    ? "education.js"
                    : "experience.js"}
                </span>
              </div>

              <div className="space-y-6">
                {activeSection === "education" ? (
                  <>
                    <InfoCard
                      icon={<GraduationCap className="w-5 h-5" />}
                      title="B.Tech in Information Technology"
                      subtitle="SGGS Institute of Engineering and Technology"
                      date="2022 - 2026 (Expected)"
                      description="CGPA: 8.60 / 10.0"
                      color="cyan"
                    />
                    <InfoCard
                      icon={<Award className="w-5 h-5" />}
                      title="12th Standard"
                      subtitle="Shri Datta Vidya Mandir"
                      date="2020 - 2022"
                      description="Percentage: 86.8%"
                      color="blue"
                    />
                  </>
                ) : (
                  <>
                    <InfoCard
                      icon={<Briefcase className="w-5 h-5" />}
                      title="Technical Head"
                      subtitle="Information Technology Student Association (ITSA) Club"
                      date="Sept 2024 - May 2025"
                      description="Led the ITSA Club to recognition as the best departmental club, overseeing 10+ activities and coordinating events with 200+ participants."
                      color="cyan"
                    />
                    <InfoCard
                      icon={<Code className="w-5 h-5" />}
                      title="Java Intern"
                      subtitle="Oasis Infobyte"
                      date="September - October 2023"
                      description="Developed Java applications and solutions, working on real-world projects."
                      color="blue"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard
                number="600+"
                label="LeetCode Problems"
                sublabel="Rating: 1680+"
                color="cyan"
              />
              <StatCard
                number="#1"
                label="Institute Rank"
                sublabel="DSA Contest"
                color="blue"
              />
              <StatCard
                number="10+"
                label="Projects Built"
                sublabel="Full Stack"
                color="indigo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

function InfoCard({ icon, title, subtitle, date, description, color }) {
  return (
    <div className="bg-gray-800/40 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-10 h-10 bg-${color}-500/20 rounded-lg flex items-center justify-center text-${color}-400 border border-${color}-500/30`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-mono mb-2">
            <Calendar className="w-3 h-3 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 break-words">
            {title}
          </h4>
          <p className="text-gray-400 font-mono text-sm mb-2 break-words">
            {subtitle}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label, sublabel, color }) {
  return (
    <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50 text-center hover:bg-gray-800/60 transition-all duration-300">
      <div
        className={`text-2xl sm:text-3xl font-mono font-bold text-${color}-400 mb-1`}
      >
        {number}
      </div>
      <div className="text-white text-sm font-medium mb-1">{label}</div>
      <div className="text-gray-400 text-xs font-mono">{sublabel}</div>
    </div>
  );
}

InfoCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

StatCard.propTypes = {
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  sublabel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default About;
