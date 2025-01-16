import React from "react";
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
    description: "A basic shopping cart application with add and remove item functionality.",
    image: "images/shopingcart.JPG",
    tech: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    ],
    liveLink: "https://shopingcart-steel.vercel.app/",
    repoLink: "",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#040025] to-[#4a0050] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-1">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className=" text-center mb-10 text-sm text-muted-foreground">Innovative and impactful projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-tl-xl rounded-tr-xl shadow-lg overflow-hidden hover:scale-105 transition delay-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 "
              />
              <div className="p-6 border border-[#23135e] border-t-0">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
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
                    // href={project.repoLink}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 cursor-not-allowed"
                    disabled
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-10 flex justify-center">
          <Link to="projects">
            <Button className=" bg-transparent border border-[#23135e] border-b-0 hover:bg-white hover:text-black px-8 py-4">
              More Projects
              <IoIosArrowRoundForward className="inline-block ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
