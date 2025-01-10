import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMui, SiNextdotjs } from "react-icons/si";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce application with Stripe payment integration.",
    image: "images/vector2.webp",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
    liveLink: "https://your-live-project.com",
    repoLink: "https://github.com/your-repo",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase my skills and projects.",
    image: "images/vector6.webp",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "ShadCN", icon: <SiMui className="text-purple-400" /> },
    ],
    liveLink: "https://your-live-project.com",
    repoLink: "https://github.com/your-repo",
  },
  {
    title: "Task Management Tool",
    description: "A Kanban-style task management tool for productivity.",
    image: "images/vector7.webp",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Redux Toolkit", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Firebase", icon: <FaNodeJs className="text-orange-500" /> },
    ],
    liveLink: "https://your-live-project.com",
    repoLink: "https://github.com/your-repo",
  },
];

const Projects = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-[#4a0050] to-[#040025] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-1">
          Featured Projects
        </h2>
        <p className=" text-center mb-10 text-sm text-muted-foreground">Innovative and impactful projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-tl-xl rounded-tr-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
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
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:underline"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects