
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Freelancing Platform",
      description: "A fully responsive Freelancing platform with product filtering, cart functionality, and checkout.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/manashvisa/ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Task Management App",
      description: "A productivity app to manage tasks with drag-and-drop functionality and time tracking.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/taskapp",
      githubUrl: "https://github.com/yourusername/taskapp",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"]
    },
    {
      title: "Weather Dashboard",
      description: "A weather application showing forecasts, historical data, and interactive maps.",
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/yourusername/weather",
      technologies: ["JavaScript", "OpenWeatherAPI", "Chart.js"]
    },
    // {
    //   title: "Social Media Dashboard",
    //   description: "Analytics dashboard for social media accounts with data visualization.",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    //   liveUrl: "https://example.com/dashboard",
    //   githubUrl: "https://github.com/yourusername/dashboard",
    //   technologies: ["React", "D3.js", "Express", "PostgreSQL"]
    // }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-700 to-slate-800 " id="projects">
      <div className="container-custom mx-auto">
        <h2 className="section-title text-center text-white border  rounded-full border-t-0 border-l-0     p-2">Projects</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one presented unique challenges and opportunities to learn and grow.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
          {projects.map((project, index) => (
            <div key={index} className="hover:animate-fade-in shadow-blue-500 shadow-[0px_0px_20px_1px]" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
