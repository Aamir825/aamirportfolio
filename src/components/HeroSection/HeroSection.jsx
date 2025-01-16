import React from 'react';
import { Button } from '../ui/button';
import { FaCss3Alt, FaFacebook, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaReact } from 'react-icons/fa';
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiShadcnui } from "react-icons/si";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="home bg-gray-900 bg-gradient-to-r from-[#040025] to-[#4a0050] text-white py-32" id="home">
            <div className="home-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Hi, I'm <span className="text-blue-500">M.Aamir</span></h1>
                        <div className="text-animate">
                            <h3 className="text-3xl mb-6">Frontend Developer</h3>
                        </div>
                        <p className="text-lg sm:text-sm lg:text-sm mb-4">
                            Detail-oriented team player with strong organizational skills.
                            Ability to handle multiple projects simultaneously with a high degree of accuracy.
                            Organized and dependable candidate successful at managing multiple priorities with a positive attitude.
                        </p>
                        <div className=' flex gap-3 mb-6'size={20} >
                            <FaHtml5 color="#E34F26" size={20} />
                            <FaCss3Alt color="#1572B6" size={20} />
                            <FaJs color="#F7DF1E" size={20} />
                            <FaReact color="#61DAFB" size={20} />
                            <RiTailwindCssFill color="#38B2AC" size={20} />
                            <SiShadcnui color="#00abf0" size={20} />
                            <SiMui color="#007FFF" size={20} />
                            <RiFirebaseFill color="#FFCA28" size={20} />

                        </div>
                        <div className="btn-box flex justify-start space-x-4 mb-8">
                            <Button className="bg-[#00abf0] hover:bg-[#2bb3e9] text-white font-bold py-4 px-10 rounded">Hire Me</Button>
                            <Link to="contact"><Button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-10 rounded">Let's Talk</Button></Link>
                        </div>
                        <div className="social-icons flex justify-start space-x-4 mb-8">
                            <a href="https://www.facebook.com/" target='_blank' className="text-2xl border-2 border-[#00abf0] rounded-full p-2"><FaFacebook size={16} /></a>
                            <a  className="text-2xl border-2 border-[#00abf0] rounded-full p-2"><FaInstagram size={16} /></a>
                            <a href="https://www.linkedin.com/in/muhammad-aamir-a9544525a/" target='_blank' className="text-2xl border-2 border-[#00abf0] rounded-full p-2"><FaLinkedin size={16} /></a>
                        </div>
                    </div>
                    <div className="developer-img">
                        <img src="images/vector8.webp" alt="Developer" className="mx-auto rounded-lg w-80 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
