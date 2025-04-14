
import React from 'react';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-b from-white to-gray-100" id="about">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-portfolio-blue mb-4">
              Hi, I'm <span className="text-portfolio-purple">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-portfolio-gray font-medium mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-portfolio-blue mb-8 max-w-lg">
              I create responsive web applications with modern technologies.
              Passionate about clean code, user experience, and innovative solutions.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-purple transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-purple transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="border border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white font-medium py-2 px-4 rounded transition duration-300">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-portfolio-lightpurple to-portfolio-purple rounded-full animate-float"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://via.placeholder.com/400x400" 
                alt="Your Name" 
                className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-center">
        <a href="#projects" className="animate-bounce p-2">
          <ChevronDown size={36} className="text-portfolio-purple" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
