import { useEffect, useState } from "react";
import character_img from "../assets/folio-hero-removebg.png";
import resume from "../assets/TanmayResume-3.pdf";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const fullText = "Full Stack Developer | ML Enthusiast";
  const typingSpeed = 80;

  const handleRedirect = (platform) => {
    const urls = {
      github: "https://github.com/Tanmayraut16",
      linkedin: "https://www.linkedin.com/in/tanmay-raut-416303257",
      twitter: "https://twitter.com",
    };
    window.open(urls[platform], "_blank");
  };

  // One-time typewriter effect
  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        setTimeout(type, typingSpeed);
      } else {
        setTypingDone(true);
      }
    };
    type();
  }, []);

  return (
    <div
      id="home"
      className="flex items-center justify-center min-h-screen px-4 py-10 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="block text-gray-300">Hi, {`I'm`}</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Tanmay Raut
              </span>
            </h1>

            <div className="font-mono lg:pt-2 text-lg md:text-xl text-gray-400">
              <span className="text-green-400">$</span>
              <span className="text-blue-400 ml-2">whoami</span>
              <span className="text-white ml-2">--role</span>
            </div>

            {/* One-time typing + full roles */}
            <div className="h-10">
              {!typingDone ? (
                <span className="text-2xl md:text-3xl font-bold text-white  ">
                  {typedText}
                  <span className="inline-block w-1 h-8 bg-blue-400 ml-1 animate-pulse" />
                </span>
              ) : (
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {fullText}
                </span>
              )}
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed px-2 lg:px-0">
            I build clean, efficient web apps using modern tools and a creative
            eye.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row gap-4 pt-4 justify-center lg:justify-start">
            <AnchorLink
              href="#work"
              offset={50}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaCode />
                Explore My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </AnchorLink>

            <a
              href={resume} // Make sure resume.pdf is in your public folder
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-blue-500/10 hover:scale-105 hover:border-blue-400 inline-block"
            >
              Check Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <span className="text-gray-400 font-mono text-sm">
              Connect with me:
            </span>
            <div className="flex gap-4">
              <FaGithub
                onClick={() => handleRedirect("github")}
                className="text-2xl cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-125"
              />
              <FaLinkedin
                onClick={() => handleRedirect("linkedin")}
                className="text-2xl cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-125"
              />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 mt-12 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-full blur-2xl animate-pulse" />
            <div
              className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-xl animate-spin opacity-50"
              style={{ animationDuration: "8s" }}
            />

            <div className="relative z-10">
              <img
                src={character_img}
                alt="Tanmay Raut - Developer Character"
                className="w-64 sm:w-80 md:w-96 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />

              {/* Floating code elements */}
              <div className="absolute top-6 -left-16 bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 font-mono text-xs text-green-400 animate-bounce">
                {`console.log('Hello!');`}
              </div>
              <div className="absolute bottom-20 -right-8 bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 font-mono text-xs text-blue-400 animate-pulse">
                &lt;code /&gt;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:visible absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-mono">
            scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-green-600/5 rounded-full blur-3xl" />
    </div>
  );
};

export default Hero;
