
import React from 'react';
import photo from '../../public/manashero.jpg'
import bg from '../../public/bg.jpg'
import {Link} from 'react-router-dom'
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useState,useEffect } from 'react';
const Hero = () => {
  const TypewriterEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {

            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [index, text, speed]);

    return <span className="typewriter-text">{displayedText}</span>;
};
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 bg-[url(../../public/bg2.jpg)] bg-no-repeat  bg-cover" id="about">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-[100px] md:text-[100px] font-bold text-white  mb-4">
              Hi, I'm <span className="text-purple-600    "> 
                <div>
                {/* <Typewriter text="Manashvi sahani" delay={100} /> */}
                {/* <TypewriterEffect text="hello" speed={200} /> */}
                <TypewriterEffect text="Manashvi" speed={100} /><br/>
                <TypewriterEffect text="sahani" speed={100} />
                </div></span>
            </h1>
            {/* <h2 className="text-2xl md:text-3xl text-portfolio-gray font-medium mb-6">
              Full Stack Developer
            </h2> */} 
            
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/Sahanimanas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-purple transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/manashvisahani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/manashvisahani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-purple transition-colors"
              >
                <Twitter size={20} />
              </a>

            </div>
            <div className="absolute w-[40px] h-[40px]  top-[-100px]  bg-gradient-to-br from-purple-100 to-portfolio-purple rounded-full animate-float"></div>
            <div className="absolute  w-[40px] h-[40px] m-12 top-[-100px] bg-gradient-to-br from-purple-100 to-portfolio-purple rounded-full animate-float"></div>
            {/* <div className="relative left-12 w-[40px] h-[40px]  m-8 bg-gradient-to-br from-purple-100 to-portfolio-purple rounded-full animate-float"></div> */}
            {/* <div className=" w-[30px] h-[30px]  bg-gradient-to-br from-purple-100 to-portfolio-purple rounded-full animate-float"></div> */}

            
            {/* <div className="flex space-x-4">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="border border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white font-medium py-2 px-4 rounded transition duration-300">
                Contact Me
              </a>
            </div> */}
          </div>
          
          <div className="hidden md:block relative">
            <div className=" relative w-80 h-80 mx-auto bg-gradient-to-br from-purple-100 to-portfolio-purple rounded-full animate-float"></div>
            <div className=" absolute left-0 top-0 w-[60px] h-[60px] mx-auto bg-gradient-to-br from-purple-100 to-portfolio-purple rounded-full animate-float">
            <div className="absolute right-[-300px] top-[-50px] w-[50px] h-[50px] mx-auto bg-gradient-to-br from-purple-100 to-portfolio-purple rounded-full animate-float"></div>
            </div>
            
            <div className="sticky w-[50px] h-[50px] m-[-33px] bg-gradient-to-br from-purple-100 to-portfolio-purple rounded-full animate-float"></div>
            <div className="absolute right-0 w-40 h-40  m-8 bg-gradient-to-br from-black to-portfolio-purple rounded-full animate-float"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={photo}
                alt="manashvi" 
                className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-center">
        <Link to={'/project'} className="animate-bounce p-2">
          <ChevronDown size={36} className="text-portfolio-purple" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
