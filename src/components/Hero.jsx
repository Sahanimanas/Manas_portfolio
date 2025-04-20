
import React from 'react';
// import photo from '../../public/hero2.jpg'
// import sample from '../../public/video3.mp4'
import {Link} from 'react-router-dom'
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useState,useEffect } from 'react';

import '.././index.css'

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
    <section className=" min-h-screen w-[100%] bg-gradient-to-tr from-slate-300 to-black  flex flex-col justify-center  pt-16 " id="about">
     
      <div className="  container-custom mx-auto">
        <div className=" items-center flex flex-col  mx-auto ">
          <div className="animate-fade-in relative text-center flex  flex-col mx-auto  justify-center  items-center ">
            <h1 className="text-[40px] md:text-[40px] lg:text-[40px] flex flex-col text-white z-999  relative  mb-4">
              Hi, I'm <span className="text-white text-[60px] md:text-[70px] lg:text-[70px]   "> 
               
                {/* <Typewriter text="Manashvi sahani" delay={100} /> */}
                {/* <TypewriterEffect text="hello" speed={200} /> */}
                <TypewriterEffect text="MANASHVI" speed={100} /><br/>
                <TypewriterEffect text="SAHANI" speed={100} />
               </span>
            </h1>
            {/* <h2 className="text-2xl md:text-3xl text-portfolio-gray font-medium mb-6">
              Full Stack Developer
            </h2> */} 
            
            
            <div className="flex space-x-4 mb-8 relative ">
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
           
          </div>
        
          
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-center">
        <a href='#projects' className="animate-bounce p-2">
          <ChevronDown size={36} className="text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
