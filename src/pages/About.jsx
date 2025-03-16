import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  ChevronRight,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import profile_img from "../assets/profile_img.png";

function About() {
  const [activeTab, setActiveTab] = useState("experience");
  const [isVisible, setIsVisible] = useState(false);

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
      className="min-h-screen py-20 px-4 md:px-8 relative"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Profile section */}
          <div
            className={`lg:col-span-4 ${
              isVisible ? "animate-fade-right" : "opacity-0"
            }`}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gray-700 transition-all duration-300 group-hover:border-blue-500">
                  <img
                    src={profile_img}
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>

              <div className="mt-6 space-y-4">
                <h2 className="text-2xl font-bold text-white">Tanmay Raut</h2>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Maharashtra, India</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Aspiring Java developer with a passion for web development and
                  blockchain technology. Currently pursuing Information
                  Technology and exploring the depths of computer science.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline section */}
          <div
            className={`lg:col-span-8 ${
              isVisible ? "animate-fade-left" : "opacity-0"
            }`}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-gray-700">
              {/* Tabs */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === "experience"
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === "education"
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </button>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {activeTab === "experience" ? (
                  <>
                    <TimelineItem
                      title="Technical Head"
                      organization="Information Technology Student Association"
                      date="August 2024"
                      description="Leading technical initiatives and organizing events for the IT department."
                      icon={<Award className="w-5 h-5" />}
                      color="blue"
                    />
                    <TimelineItem
                      title="Java Intern"
                      organization="Oasis Infobyte"
                      date="September - October 2023"
                      description="Developed Java applications and solutions, working on real-world projects."
                      icon={<Briefcase className="w-5 h-5" />}
                      color="purple"
                    />
                  </>
                ) : (
                  <>
                    <TimelineItem
                      title="B-Tech in Information Technology"
                      organization="SGGS Institute of Engineering and Technology"
                      date="2022 - Present"
                      description="CGPA - 9.08 (First year)"
                      icon={<GraduationCap className="w-5 h-5" />}
                      color="blue"
                    />
                    <TimelineItem
                      title="12th Standard"
                      organization="Shri Datta Vidya Mandir"
                      date="2020 - 2022"
                      description="Percentage - 88.4%"
                      icon={<Award className="w-5 h-5" />}
                      color="purple"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-blue-500/10 rounded-xl p-4">
                  <div className="text-blue-400 font-semibold">600+ LeetCode question</div>
                  <div className="text-sm text-gray-400">Experience</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-4">
                  <div className="text-purple-400 font-semibold">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
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
    </div>
  );
}

function TimelineItem({ title, organization, date, description, icon, color }) {
  return (
    <div
      className={`relative pl-8 before:absolute before:left-2 before:top-2 before:w-px before:h-full before:bg-gray-700`}
    >
      <div
        className={`absolute left-0 top-2 w-4 h-4 rounded-full bg-${color}-500/20 border border-${color}-500/50 flex items-center justify-center text-${color}-400`}
      >
        {icon}
      </div>
      <div className="bg-gray-800/40 rounded-xl p-6 hover:bg-gray-800/60 transition-all duration-300">
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <div className="text-gray-400 mb-3">{organization}</div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default About;
