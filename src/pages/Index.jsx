
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer';
import './index.css'
const Index = () => {
  return (
    <div className="min-h-screen bg-black Special-Gothic-Expanded-One scroll-smooth">
      
      <Hero />
      <Projects />
      <Skills/>
      <Contact/>
     <Footer/>
    </div>
  );
};

export default Index;
