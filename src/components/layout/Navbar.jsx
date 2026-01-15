import React, { useState } from 'react'
import logo from '../../assets/tycoon-logo.png' 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home' },
    { name: 'Categories' },
    { name: 'Highlights' },
    { name: 'About' },
    { name: 'Products' },
    { name: 'Testimonials' },
    { name: 'Contact' },
  ]

  return (
    <nav className="fixed w-full bg-[#050b16]/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between items-center h-20">
        <div className="cursor-pointer">
          <img
            src={logo} 
            alt="Tycoon Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {links.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer select-none hover:text-blue-400 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#050b16] text-white font-medium flex flex-col items-center space-y-6 py-6 border-t border-blue-500/20">
          {links.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
