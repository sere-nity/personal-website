import { getProjectBySlug, getProjects } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          {project.frontmatter.image && (
            <div className="relative w-full h-[500px] mb-8">
              <Image
                src={project.frontmatter.image}
                alt={project.frontmatter.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-4xl font-bold">
              {project.frontmatter.title}
            </h1>
            
            <div className="flex gap-4">
              {project.frontmatter.githubUrl && (
                <Link
                  href={project.frontmatter.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <FaGithub size={20} />
                  <span>View Code</span>
                </Link>
              )}
              
              {project.frontmatter.demoUrl && (
                <Link
                  href={project.frontmatter.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt size={18} />
                  <span>Live Demo</span>
                </Link>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-xl text-gray-600">
            {project.frontmatter.description}
          </p>
        </header>

        {/* Content */}
        <div className="prose max-w-none">
          {project.content}
        </div>
      </div>
    </article>
  );
}