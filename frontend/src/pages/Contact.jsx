import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code,
  User,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import PropTypes from "prop-types";

function Contact() {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: null,
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  // Terminal animation effect
  useEffect(() => {
    const lines = [
      { text: "tanmay@dev:~$ ./connect.sh", delay: 500 },
      { text: "Initializing contact module...", delay: 1200 },
      { text: "Ready to receive your message!", delay: 800 },
      { text: "tanmay@dev:~$ _", delay: 0 }
    ];

    if (isVisible && terminalLines.length < lines.length) {
      const timer = setTimeout(() => {
        if (currentLine < lines.length) {
          setTerminalLines(prev => [...prev, lines[currentLine].text]);
          setCurrentLine(prev => prev + 1);
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

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ submitting: true, success: null, message: "" });
    
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          submitting: false,
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        event.target.reset();
      } else {
        setFormStatus({
          submitting: false,
          success: false,
          message: data.message || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        message: "Unable to send message. Please try again later.",
      });
      console.log("Error : ", error);
      
    }
  };

  const contactInfo = [
    { 
      icon: <Mail className="w-4 h-4" />, 
      text: "hitanmayraut@gmail.com", 
      label: "Email",
      color: "cyan" 
    },
    { 
      icon: <Phone className="w-4 h-4" />, 
      text: "789654123", 
      label: "Phone",
      color: "indigo" 
    },
    { 
      icon: <MapPin className="w-4 h-4" />, 
      text: "Gadchiroli, India", 
      label: "Location",
      color: "cyan" 
    }
  ];

  return (
    <div
      id="contact"
      className="min-h-screen py-20 px-4 md:px-8 relative"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="h-px w-8 bg-cyan-500"></div>
              <Code className="text-cyan-500 w-5 h-5" />
              <div className="h-px w-8 bg-cyan-500"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-white">
              <span className="text-cyan-400">&lt;</span>
              contact
              <span className="text-cyan-400">/&gt;</span>
            </h1>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Info section */}
          <div
            className={`lg:col-span-4 ${
              isVisible ? "animate-fade-right" : "opacity-0"
            }`}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-mono font-bold text-white">Get in Touch</h2>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="font-mono p-3 bg-gray-900/80 rounded-lg border border-gray-700/50 text-sm mb-6">
                {terminalLines.map((line, index) => (
                  <div key={index} className={index % 2 === 0 ? "text-cyan-400" : "text-gray-300"}>
                    {line}
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-gray-300">
                  {`Let's`} collaborate and bring your ideas to life. Reach out and {`I'll`} get back to you within 24 hours.
                </p>
                
                {contactInfo.map((info, index) => (
                  <ContactInfoItem
                    key={index}
                    icon={info.icon}
                    text={info.text}
                    label={info.label}
                    color={info.color}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Form section */}
          <div
            className={`lg:col-span-8 ${
              isVisible ? "animate-fade-left" : "opacity-0"
            }`}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
              {/* File path bar */}
              <div className="flex items-center mb-6 bg-gray-900/80 py-2 px-3 rounded-md border border-gray-700/50 text-xs font-mono text-gray-400">
                <span className="text-cyan-400">~/contact/</span>
                message.js
              </div>

              {/* Form Status Message */}
              {formStatus.message && (
                <div
                  className={`p-4 mb-6 rounded-lg font-mono text-sm ${
                    formStatus.success
                      ? "bg-green-500/10 text-green-400 border border-green-500/30"
                      : "bg-red-500/10 text-red-400 border border-red-500/30"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              {/* Form */}
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-300 font-mono text-sm">
                      <User className="w-4 h-4 text-cyan-400" />
                      <span>const name =</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="'Your Name'"
                      className="w-full bg-gray-900/80 text-white px-4 py-3 rounded-md border border-gray-700/50 focus:outline-none focus:border-cyan-500 font-mono"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-300 font-mono text-sm">
                      <Mail className="w-4 h-4 text-indigo-400" />
                      <span>const email =</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="'your@email.com'"
                      className="w-full bg-gray-900/80 text-white px-4 py-3 rounded-md border border-gray-700/50 focus:outline-none focus:border-indigo-500 font-mono"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-gray-300 font-mono text-sm">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span>const message =</span>
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="'Your message here...'"
                    className="w-full bg-gray-900/80 text-white px-4 py-3 rounded-md border border-gray-700/50 focus:outline-none focus:border-cyan-500 font-mono resize-none"
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-md font-mono hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 ${
                      formStatus.submitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    <span>{formStatus.submitting ? "sending()" : "submit()"}</span>
                    {formStatus.submitting ? (
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({ icon, text, label, color }) {
  return (
    <div
      className={`relative pl-8 before:absolute before:left-2 before:top-2 before:w-px before:h-full before:bg-gray-700/50`}
    >
      <div
        className={`absolute left-0 top-2 w-4 h-4 rounded-full bg-${color}-500/20 border border-${color}-500/50 flex items-center justify-center text-${color}-400`}
      >
        {icon}
      </div>
      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
        <div className="text-xs text-gray-400 font-mono mb-1">{label}</div>
        <div className="text-white font-mono">{text}</div>
      </div>
    </div>
  );
}

ContactInfoItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Contact;