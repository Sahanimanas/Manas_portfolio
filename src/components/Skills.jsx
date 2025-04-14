
import React from 'react';
import { Code, Database, Globe, Layers, LineChart, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      icon: <Globe className="h-10 w-10 text-portfolio-purple" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS", "SASS"]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      icon: <Code className="h-10 w-10 text-portfolio-purple" />,
      skills: ["Node.js", "Express", "NestJS", "Django", "Ruby on Rails", "PHP", "GraphQL", "REST APIs"]
    },
    {
      title: "Database",
      description: "Designing and querying databases",
      icon: <Database className="h-10 w-10 text-portfolio-purple" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma", "Mongoose"]
    },
    {
      title: "DevOps & Tools",
      description: "Deployment, version control, and development tools",
      icon: <Layers className="h-10 w-10 text-portfolio-purple" />,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify", "Webpack", "Vite"]
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications",
      icon: <Smartphone className="h-10 w-10 text-portfolio-purple" />,
      skills: ["React Native", "Flutter", "Ionic", "Swift", "Kotlin"]
    },
    {
      title: "Data & Analytics",
      description: "Working with data visualization and analysis",
      icon: <LineChart className="h-10 w-10 text-portfolio-purple" />,
      skills: ["D3.js", "Chart.js", "Google Analytics", "Data Visualization", "Python (Pandas, NumPy)"]
    }
  ];

  return (
    <section id="skills">
      <div className="container-custom mx-auto">
        <h2 className="section-title text-center">My Skills</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12">
          I've developed expertise in various technologies and tools throughout my career.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-portfolio-blue mb-2">{category.title}</h3>
              <p className="text-portfolio-gray mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-portfolio-blue">
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
