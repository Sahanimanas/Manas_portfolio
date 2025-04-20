
import React from 'react';
import { Code, Database, Globe, Layers, LineChart, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      icon: <Globe className="h-10 w-10 text-portfolio-purple" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS", "SASS"]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      icon: <Code className="h-10 w-10 text-portfolio-purple" />,
      skills: ["Node.js", "Express", "REST APIs"]
    },
    {
      title: "Database",
      description: "Designing and querying databases",
      icon: <Database className="h-10 w-10 text-portfolio-purple" />,
      skills: ["MongoDB", "MySQL", "Firebase","Mongoose"]
    },
    {
      title: "DevOps & Tools",
      description: "Deployment, version control, and development tools",
      icon: <Layers className="h-10 w-10 text-portfolio-purple" />,
      skills: ["Git", "GitHub", "Netlify", "Webpack", "Vite"]
    },
    // {
    //   title: "Mobile Development",
    //   description: "Creating cross-platform mobile applications",
    //   icon: <Smartphone className="h-10 w-10 text-portfolio-purple" />,
    //   skills: ["React Native", "Flutter", "Ionic", "Swift", "Kotlin"]
    // },
    {
      title: "Data & Analytics",
      description: "Working with data visualization and analysis",
      icon: <LineChart className="h-10 w-10 text-portfolio-purple" />,
      skills: ["Power-BI"]
    }
  ];

  return (
    <section className=" mx-auto bg-gradient-to-br from-gray-700 to-slate-800 text-white" id="skills">
      <div className="container-custom mx-auto  text-white">
        <h2 className="section-title text-center text-white ">My Skills</h2>
        <p className="text-center  max-w-2xl mx-auto mb-12">
          I've developed expertise in various technologies and tools throughout my career.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg border border-t-0 border-l-0 shadow-blue-500 shadow-[0px_0px_20px_1px] hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-portfolio-gray mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-purple-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
