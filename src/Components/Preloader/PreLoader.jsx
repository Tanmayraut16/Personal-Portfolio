import React, { useEffect, useState } from "react";
import "./PreLoader.css";

function PreLoader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [currentGreeting, setCurrentGreeting] = useState("");

  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "Hola", lang: "Spanish" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "Bonjour", lang: "French" },
    { text: "你好", lang: "Chinese" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "Ciao", lang: "Italian" },
    { text: "Olá", lang: "Portuguese" },
  ];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setCurrentGreeting(greetings[currentIndex].text);
      currentIndex = (currentIndex + 1) % greetings.length;
    }, 400);

    setTimeout(() => {
      setShowPreloader(false);
      clearInterval(intervalId);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className={`preloader ${
          showPreloader ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="preloader-content">
          <h1 className="greeting-text">{currentGreeting}</h1>
          <div className="blur-background" />
        </div>
      </div>
    </>
  );
}

export default PreLoader;
