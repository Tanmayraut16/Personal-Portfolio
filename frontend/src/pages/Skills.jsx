import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Globe,
  Database,
  Terminal,
  Hammer
} from "lucide-react";
import assets from "../assets/assets";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-4 h-4" />,
      color: "cyan",
      skills: [
        { icon: assets.html_logo, name: "HTML" },
        { icon: assets.css, name: "CSS" },
        { icon: assets.js, name: "Javascript" },
        { icon: assets.react, name: "React" },
        { icon: assets.tailwind, name: "Tailwind" },
        { icon: assets.next, name: "Next.js" }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-4 h-4" />,
      color: "indigo",
      skills: [
        { icon: assets.node, name: "Node.js" },
        { icon: assets.mongo, name: "MongoDB" },
        { icon: assets.firebase_logo, name: "Firebase" },
        { icon: assets.python, name: "Python" },
        { icon: assets.sql, name: "MySQL" }
      ]
    },
    {
      title: "Programming",
      icon: <Terminal className="w-4 h-4" />,
      color: "purple",
      skills: [
        { icon: assets.java_logo, name: "Java" },
        { icon: assets.cpp, name: "C++" },
        { icon: assets.python, name: "Python" },
        { icon: assets.c_logo, name: "C" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Hammer className="w-4 h-4" />,
      color: "pink",
      skills: [
        { icon: assets.git, name: "Git" },
        { icon: assets.github, name: "Github" },
        { icon: assets.postman, name: "Postman" },
        { icon: assets.vs, name: "VS Code" },
        { icon: assets.canva, name: "Canva" },
        { icon: assets.ps, name: "Problem Solving" }
      ]
    }
  ];

  return (
    <div id="skills" className="min-h-screen py-20 px-4 md:px-8 relative">
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
              <Cpu className="text-cyan-500 w-5 h-5" />
              <div className="h-px w-8 bg-cyan-500"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-white">
              <span className="text-cyan-400">&lt;</span>
              skills
              <span className="text-cyan-400">/&gt;</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4 font-mono">
            // expertise across the full stack development spectrum
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={item}
              className={`bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group ${
                isVisible ? idx % 2 === 0 ? "animate-fade-right" : "animate-fade-left" : "opacity-0"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-${category.color}-500/20 text-${category.color}-400 mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl font-mono font-bold text-${category.color}-400`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* File path bar */}
              <div className="flex items-center mb-4 bg-gray-900/80 py-1.5 px-3 rounded-md border border-gray-700/50 text-xs font-mono text-gray-400">
                <span className="text-cyan-400">~/skills/</span>
                {category.title.toLowerCase()}.js
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-1.5 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-gray-300 text-sm font-mono font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

    </div>
  );
};

export default Skills;