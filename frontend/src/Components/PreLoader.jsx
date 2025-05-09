import React, { useEffect, useState } from "react";

function PreLoader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const terminalLines = [
    { text: "$ npm start", className: "text-green-400" },
    { text: "~ Initializing application...", className: "text-gray-400" },
    { text: "~ Compiling source files...", className: "text-gray-400" },
    { text: "~ Loading modules...", className: "text-gray-400" }
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 2000);
      return () => clearTimeout(timer);
    }

    const currentFullLine = terminalLines[lineIndex].text;

    if (charIndex < currentFullLine.length) {
      const typingTimer = setTimeout(() => {
        setCurrentLine((prev) => prev + currentFullLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(typingTimer);
    } else {
      // When a line is fully typed, move to the next
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [
          ...prev,
          { text: currentFullLine, className: terminalLines[lineIndex].className }
        ]);
        setCurrentLine(""); 
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [charIndex, lineIndex]);  // Ensure effect runs when charIndex changes

  if (!showPreloader) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900">
      <div className="relative flex flex-col items-center max-w-lg w-full">
        <div className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-gray-700">
          <div className="bg-gray-700 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-gray-300 text-sm font-mono">
              loading-application.sh
            </div>
          </div>
          
          <div className="p-4 font-mono text-sm">
            {displayedLines.map((line, index) => (
              <div key={index} className={`${line.className} mb-2`}>
                {line.text}
              </div>
            ))}

            {lineIndex < terminalLines.length && (
              <div className={`${terminalLines[lineIndex].className} mb-2`}>
                {currentLine}
                <span 
                  className={`inline-block w-2 h-4 bg-white ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-3 text-gray-400 text-sm font-mono">
          <span className="text-blue-400">function</span> initApp() &#123; ... &#125;
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
