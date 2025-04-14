
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-bold text-2xl text-portfolio-purple">Portfolio</a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-medium text-portfolio-blue hover:text-portfolio-purple transition-colors">About</a>
          <a href="#projects" className="font-medium text-portfolio-blue hover:text-portfolio-purple transition-colors">Projects</a>
          <a href="#skills" className="font-medium text-portfolio-blue hover:text-portfolio-purple transition-colors">Skills</a>
          <a href="#contact" className="font-medium text-portfolio-blue hover:text-portfolio-purple transition-colors">Contact</a>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <div className="container-custom py-4 flex flex-col space-y-3">
            <a href="#about" className="font-medium py-2 text-portfolio-blue hover:text-portfolio-purple transition-colors" onClick={toggleMenu}>About</a>
            <a href="#projects" className="font-medium py-2 text-portfolio-blue hover:text-portfolio-purple transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="font-medium py-2 text-portfolio-blue hover:text-portfolio-purple transition-colors" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="font-medium py-2 text-portfolio-blue hover:text-portfolio-purple transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
