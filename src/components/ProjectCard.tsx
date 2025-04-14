
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  technologies
}) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm card-hover">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-portfolio-blue mb-2">{title}</h3>
        <p className="text-portfolio-gray mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">{tech}</Badge>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-portfolio-blue hover:text-portfolio-purple transition-colors"
            >
              <Github size={16} className="mr-1" />
              Source Code
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-portfolio-blue hover:text-portfolio-purple transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
