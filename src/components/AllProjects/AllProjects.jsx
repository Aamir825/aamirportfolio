import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaStripeS } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMui, SiJson } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce application with Stripe payment integration.",
    image: "images/ecommerce_2.JPG",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Mui", icon: <SiMui className="text-blue-600" /> },
      { name: "Stripe", icon: <FaStripeS className="text-blue-600" /> },
      { name: "Firebase", icon: <RiFirebaseFill className="text-yellow-400" /> }
    ],
    liveLink: "https://ecommerce-alpha-wheat.vercel.app/",
    repoLink: "",
  },
  {
    title: "Dashboard UI",
    description: "A modern dashboard showcasing data with interactive charts and tables.",
    image: "images/dashboard.JPG",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "JSON Server", icon: <SiJson className="text-gray-400" /> },
    ],
    liveLink: "https://dashboard-tau-orpin.vercel.app/",
    repoLink: "",
  },
  {
    title: "Shopping Cart",
    description: "A basic shopping cart application with add and remove items functionality.",
    image: "images/shopingcart.JPG",
    tech: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    ],
    liveLink: "https://shopingcart-steel.vercel.app/",
    repoLink: "",
  },
  {
    title: "Website UI",
    description: "A clean and modern landing page for a furniture store.",
    image: "images/frontpage.JPG",
    tech: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    ],
    liveLink: "https://frontpage-woad.vercel.app/",
    repoLink: "",
  },
  {
    title: "Filtering UI",
    description: "A dynamic UI that fetches and display GitHub profile data.",
    image: "images/fetchapi.JPG",
    tech: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    ],
    liveLink: "https://fetchapi-five.vercel.app/",
    repoLink: "",
  },
  {
    title: "Todolist",
    description: "A responsive to-do list app built with React and Tailwind CSS.",
    image: "images/todolist.JPG",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
    liveLink: "https://todoinreact-sepia.vercel.app/",
    repoLink: "",
  }
];

const AllProjects = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.section className=" text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          All <span className="text-purple-400">Projects</span>
        </motion.h2>
        <motion.p
          className="text-center mb-10 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Explore more of my work and projects.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-tl-xl rounded-tr-xl shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
              <div className="p-6 border border-[#23135e] border-t-0">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 cursor-not-allowed"
                    disabled
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 flex justify-center">
          <Link to="projects">
            <Button className="bg-transparent border border-[#23135e] border-b-0 hover:bg-white hover:text-black px-8 py-4">
              More Projects
              <IoIosArrowRoundForward className="inline-block ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default AllProjects;