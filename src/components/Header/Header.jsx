import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#040025] to-[#4a0050] shadow-md text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">M.Aamir</a>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <NavLink to="/" className={({isActive})=>`text-white  block px-3 navl py-2 rounded-md text-sm font-medium ${isActive ? "active": ""}`}>Home</NavLink>
              <NavLink to="journey" className={({isActive})=>`text-white  block px-3 navl py-2 rounded-md text-sm font-medium ${isActive ? "active": ""}`}>Journey</NavLink>
              <NavLink to="projects" className={({isActive})=>`text-white  block px-3 navl py-2 rounded-md text-sm font-medium ${isActive ? "active": ""}`}>Projects</NavLink>
              <NavLink to="about" className={({isActive})=>`text-white  block px-3 navl py-2 rounded-md text-sm font-medium ${isActive ? "active": ""}`}>About</NavLink>
              <NavLink to="contact" className={({isActive})=>`text-white  block px-3 navl py-2 rounded-md text-sm font-medium ${isActive ? "active": ""}`}>Contact</NavLink>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-200 hover:text-white hover:bg-[#0e0a2b] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-gradient-to-r from-[#4a0050] to-[#040025] shadow-md rounded-bl-2xl rounded-br-2xl`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
          <NavLink to="journey" className="text-white block px-3 py-2 rounded-md text-base font-medium">Journey</NavLink>
          <NavLink to="projects" className="text-white block px-3 py-2 rounded-md text-base font-medium">Projects</NavLink>
          <NavLink to="about" className="text-white block px-3 py-2 rounded-md text-base font-medium">About</NavLink>
          <NavLink to="contact" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;