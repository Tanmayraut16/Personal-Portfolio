import React from 'react';
import { motion } from 'framer-motion';
import theme_pattern from "../assets/theme_pattern.svg";
import assets from "../assets/assets";

const Skills = () => {
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
      color: "from-blue-400 to-purple-500",
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
      color: "from-purple-400 to-pink-500",
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
      color: "from-blue-500 to-cyan-400",
      skills: [
        { icon: assets.java_logo, name: "Java" },
        { icon: assets.cpp, name: "C++" },
        { icon: assets.python, name: "Python" },
        { icon: assets.c_logo, name: "C" }
      ]
    },
    {
      title: "Tools & Others",
      color: "from-purple-500 to-indigo-400",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block mb-6">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise across the full stack development spectrum, from frontend magic to backend architecture
          </p>
        </motion.div>

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
              className="backdrop-blur-sm bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group"
            >
              <motion.h3 
                className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-700/40 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-1.5 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
};

export default Skills;