import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, frontmatter } = project;
  const { title, description, tags, demoUrl, githubUrl } = frontmatter;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/projects/${slug}`} className="hover:text-purple-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm font-light mb-4">
          {description}
        </p>

        <div className="flex gap-2">
          {demoUrl && (
            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors"
            >
              <FaExternalLinkAlt size={16} />
            </Link>
          )}
          
          {githubUrl && (
            <Link 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors"
            >
              <FaGithub size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}