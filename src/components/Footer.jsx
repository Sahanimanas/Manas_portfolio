import React from 'react';
import { ChevronUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[url(../../public/bg2.jpg)] bg-cover text-white py-12">
      <div className="container-custom mx-auto">
        <div className="flex flex-col items-center">
          <a href="#" className="mb-6 inline-block bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all">
            <ChevronUp size={24} />
          </a>
          
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-lightpurple transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-lightpurple transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-lightpurple transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:yourname@example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-lightpurple transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#about" className="hover:text-portfolio-lightpurple ">About</a>
            <a href="#projects" className="hover:text-portfolio-lightpurple transition-colors">Projects</a>
            <a href="#skills" className="hover:text-portfolio-lightpurple transition-colors">Skills</a>
            <a href="#contact" className="hover:text-portfolio-lightpurple transition-colors">Contact</a>
          </div> */}
          
          <div className="text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} Manashvi Sahani. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
