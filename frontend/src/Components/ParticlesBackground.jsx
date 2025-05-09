import React, { useEffect, useState } from "react";

export const ParticlesBackground = () => {
    const [activeParticles, setActiveParticles] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const animationElements = document.querySelectorAll('.animate-on-load');
        
        animationElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.remove('opacity-0');
            element.classList.remove('translate-y-10');
            element.classList.add('opacity-100');
            element.classList.add('translate-y-0');
          }, 200 * index);
        });
    
        // Activate particles after initial animations
        setTimeout(() => setActiveParticles(true), 1000);
      }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeParticles &&
        Array(200)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${
                i % 3 === 0
                  ? "from-blue-400 to-blue-600"
                  : i % 3 === 1
                  ? "from-purple-400 to-purple-600"
                  : "from-cyan-400 to-cyan-600"
              } opacity-70`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  5 + Math.random() * 10
                }s ease-in-out infinite alternate, 
                         pulse ${
                           2 + Math.random() * 3
                         }s ease-in-out infinite alternate`,
              }}
            />
          ))}
    </div>
  );
};
