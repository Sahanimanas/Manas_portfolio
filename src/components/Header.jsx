
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate= useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 h-15 w-full bg-black bg-opacity-70 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-bold text-2xl text-portfolio-purple border border-purple-600 rounded-full p-2 shadow-[rgba(0,0,10,0.5)_0px_0px_5px_3px]  shadow-purple-500 ">MS</a>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to={'/#about'} className="font-medium text-white   hover:head hover:text-portfolio-purple transition-colors">About</Link>
          <Link to={'/project'} className="font-medium text-white hover:text-portfolio-purple transition-colors">Projects</Link>
          <Link to={'/skill'} className="font-medium text-white hover:text-portfolio-purple transition-colors">Skills</Link>
          <Link to={'/contact'} className="font-medium text-white hover:text-portfolio-purple transition-colors">Contact</Link>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X className='text-white hover:text-purple-800' size={24} /> : <Menu className='text-white hover:text-purple-800 border outline-none  rounded bg-purple-500 hover:shadow-purple-600 hover:shadow-lg ' size={34} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black shadow-md md:hidden">
          <div className="container-custom py-4 flex flex-col space-y-3">
            <a href="#about" className="font-medium py-2 text-white hover:text-portfolio-purple transition-colors" onClick={toggleMenu}>About</a>
            <a href="#projects" className="font-medium py-2 text-white hover:text-portfolio-purple transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="font-medium py-2 text-white hover:text-portfolio-purple transition-colors" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="font-medium py-2 text-white hover:text-portfolio-purple transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
