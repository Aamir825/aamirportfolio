import React from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiShadcnui } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-32 bg-gradient-to-r from-[#4a0050] to-[#040025] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="images/vector8.webp"
              alt="About Me"
              className="rounded-full shadow-lg w-72 h-72 object-cover"
            />
          </motion.div>
          {/* Text Section */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-purple-400">Me</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hello! I’m a passionate <span className="text-purple-400">Frontend Developer</span> with a love for crafting intuitive and visually stunning user interfaces.
              I specialize in building responsive and interactive web applications using modern technologies <span className="flex gap-3 items-center"> like
                <FaHtml5 color="#E34F26" size={20} />
                <FaCss3Alt color="#1572B6" size={20} />
                <FaJs color="#F7DF1E" size={20} />
                <FaReact color="#61DAFB" size={20} />
                <RiTailwindCssFill color="#38B2AC" size={20} />
                <SiShadcnui color="#00abf0" size={20} />
                <SiMui color="#007FFF" size={20} />
                <RiFirebaseFill color="#FFCA28" size={20} />
              </span>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My mission is to combine design and technology to deliver seamless user experiences, ensuring every project reflects innovation, functionality, and creativity.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition"
            >
              Let’s Connect
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
