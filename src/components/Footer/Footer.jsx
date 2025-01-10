import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#040013] to-[#4a0050] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold">Brand</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/home" className="text-gray-400 hover:text-white">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;