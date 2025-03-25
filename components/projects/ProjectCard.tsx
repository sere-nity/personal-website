import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, frontmatter } = project;
  const { title, description, tags, image, demoUrl, githubUrl } = frontmatter;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full group">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {demoUrl && (
            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
            >
              <FaExternalLinkAlt size={18} />
            </Link>
          )}
          
          {githubUrl && (
            <Link 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
            >
              <FaGithub size={18} />
            </Link>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/projects/${slug}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}