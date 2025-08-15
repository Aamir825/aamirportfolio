import React from 'react';
import { motion } from 'framer-motion';
import { BsCalendar } from 'react-icons/bs';
import { CiLocationOn } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { FaWordpress } from "react-icons/fa6";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMui, SiRedux, SiJson, SiShadcnui } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";

const Journey = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-r from-[#4a0050] to-[#040025] text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-semibold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My <span className="text-purple-400">Journey</span>
        </motion.h2>
        <motion.div
          className="flex flex-wrap gap-8 justify-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Education Column */}
          <motion.div
            className="flex-1 min-w-[300px] md:min-w-[400px]"
            variants={fadeInVariant}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold mb-8">Education</h3>
            <div className="border-l-4 border-purple-400 pl-8">
              {[
                {
                  period: "2019 - 2023",
                  title: "BS Software Engineering",
                  institution: "Brains Institute Peshawar",
                },
                {
                  period: "2018 - 2019",
                  title: "General Science",
                  institution: "Karwan Model College Kohat",
                },
                {
                  period: "2016 - 2017",
                  title: "Science",
                  institution: "Working Folks Grammar School Kohat 1",
                },
              ].map((edu, index) => (
                <motion.div
                  className="mb-8"
                  key={index}
                  variants={fadeInVariant}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="relative border border-pink-400 p-6 rounded-lg hover:bg-[#4a0050]">
                    <div className="absolute -top-1 left-[-3.1rem] w-8 h-8 bg-purple-400 rounded-full"></div>
                    <div className="flex items-center text-lg text-purple-400 mb-2">
                      <BsCalendar className="text-white text-xl mr-2" />
                      {edu.period}
                    </div>
                    <h3 className="text-xl font-semibold">{edu.title}</h3>
                    <p className="text-md text-gray-400">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Experience Column */}
          <motion.div
            className="flex-1 min-w-[300px] md:min-w-[400px]"
            variants={fadeInVariant}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold mb-8">Experience</h3>
            <div className="border-l-4 border-purple-400 pl-8">
              {[
                {
                  period: "08/2024 - Present",
                  role: "Frontend Developer",
                  company: "Merik Solutions",
                  location: "Islamabad, Pakistan",
                  technologies: [
                    <SiJavascript className="text-yellow-400" />,
                    <FaReact className="text-blue-400" />,
                    <SiTailwindcss className="text-teal-400" />,
                    <SiMui className="text-blue-600" />,
                    <SiShadcnui />,
                    <SiRedux className="text-purple-600" />,
                    <SiJson className="text-gray-400" />,
                    <RiFirebaseFill className="text-yellow-400" />,
                  ],
                  description:
                    "Currently contributing to the development of modern, user-friendly web applications at Merik Solution.",
                },
                {
                  period: "06/2023 - 08/2023",
                  role: "Frontend Developer Intern",
                  company: "Brains Institute Peshawar",
                  location: "Peshawar, Pakistan",
                  technologies: [
                    <FaHtml5 className="text-orange-500" />,
                    <FaCss3Alt className="text-blue-500" />,
                    <SiJavascript className="text-yellow-400" />,
                    <FaWordpress className="text-blue-400" />,
                  ],
                  description:
                    "Successfully completed a 3-month frontend internship at Brains Institute Peshawar.",
                },
              ].map((exp, index) => (
                <motion.div
                  className="mb-8"
                  key={index}
                  variants={fadeInVariant}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="relative border border-pink-400 p-6 rounded-lg hover:bg-[#4a0050]">
                    <div className="absolute -top-1 left-[-3.1rem] w-8 h-8 bg-purple-400 rounded-full"></div>
                    <div className="flex items-center text-lg text-purple-400 mb-2">
                      <BsCalendar className="text-white text-xl mr-2" />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm">{exp.company}</p>
                    <p className="flex items-center gap-2 mt-1">
                      <CiLocationOn />
                      <span className="text-sm text-cyan-500">{exp.location}</span>
                    </p>
                    <p className="flex items-center gap-2 mt-2 text-gray-300">
                      <GrTechnology />
                      <span className="flex items-center gap-2">{exp.technologies}</span>
                    </p>
                    <p className="text-sm mt-2 text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
