import React from "react";
import { motion } from "framer-motion";
import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";
import { ParticlesBackground } from "../Components/ParticlesBackground";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "577e6191-51c2-4132-be65-72051e77c71e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    { icon: mail_icon, text: "hitanmayraut@gmail.com", alt: "Email" },
    { icon: call_icon, text: "789654123", alt: "Phone" },
    { icon: location_icon, text: "Gadchiroli, India", alt: "Location" }
  ];

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative overflow-hidden">
      <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
            Get in Touch
          </h2>
          <div className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life
          </div>
        </motion.div>

        {/* Contact Container */}
        <div className="grid lg:grid-cols-2 gap-12 backdrop-blur-sm bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Let's create something
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block mt-2">
                  amazing together
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mt-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-600/30 border border-white/10 group-hover:border-white/20 transition-all duration-300 shadow-lg">
                    <img src={info.icon} alt={info.alt} className="w-6 h-6" />
                  </div>
                  <p className="text-white text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {info.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="space-y-6 bg-black/40 p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm"
          >
            {/* Name Input */}
            <motion.div {...fadeInUp} className="space-y-2">
              <label className="text-gray-300 font-medium block">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full bg-gray-800/50 text-white px-6 py-4 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div {...fadeInUp} className="space-y-2">
              <label className="text-gray-300 font-medium block">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full bg-gray-800/50 text-white px-6 py-4 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            {/* Message Input */}
            <motion.div {...fadeInUp} className="space-y-2">
              <label className="text-gray-300 font-medium block">Your Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full bg-gray-800/50 text-white px-6 py-4 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg tracking-wide shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;