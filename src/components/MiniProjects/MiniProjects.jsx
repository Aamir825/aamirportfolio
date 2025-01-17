import React from 'react'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, } from "react-icons/si";

const projects = [
    {
        title: "Gradient Generator",
        description: "A tool to create custom CSS gradients with real-time previews.",
        image: "images/GradientGenerator.JPG",
        tech: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        ],
        liveLink: "https://gradientgenerator-six.vercel.app/",
        repoLink: "",
    },
    {
        title: "QR Code Generator",
        description: "A web app that generates QR codes for any input text.",
        image: "images/QRcode.JPG",
        tech: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        ],
        liveLink: "https://qrcodegenerator-lovat-tau.vercel.app/",
        repoLink: "",
    },
    {
        title: "Weather App",
        description: "A simple weather app displaying real-time weather data fetched using APIs.",
        image: "images/WeatherApp.JPG",
        tech: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        ],
        liveLink: "https://shopingcart-steel.vercel.app/",
        repoLink: "",
    },
];

const MiniProjects = () => {
    return (
        <>
            <div className="container mx-auto px-6 md:px-12 pt-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-1">
                    Mini <span className="text-purple-400">Projects</span>
                </h2>
                <p className="text-center mb-10 text-sm text-muted-foreground">
                    Creative and practical implementations
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-tl-xl rounded-tr-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
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
            </div>
        </>
    )
}

export default MiniProjects