import { getProjectBySlug, getProjects } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectContent from '@/components/projects/ProjectContent';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';

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

function getYouTubeVideoId(url: string | undefined): string | null {
  if (!url) return null;
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
}

function isYouTubeUrl(url: string | undefined): boolean {
  return typeof url === 'string' && (url.includes('youtu.be') || url.includes('youtube.com'));
}

export default async function ProjectPage({ params }: Props) {
  try {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
      notFound();
    }

    const hasYouTubeVideo = project.frontmatter.demoUrl && isYouTubeUrl(project.frontmatter.demoUrl);
    const youtubeVideoId = hasYouTubeVideo ? getYouTubeVideoId(project.frontmatter.demoUrl) : null;

    return (
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
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
                
                {project.frontmatter.demoUrl && !hasYouTubeVideo && (
                  <Link
                    href={project.frontmatter.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>External Link</span>
                  </Link>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-purple-100 text-purple-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              {project.frontmatter.description}
            </p>

            {youtubeVideoId ? (
              <YouTubeEmbed videoId={youtubeVideoId} />
            ) : project.frontmatter.image && (
              <div className="relative w-full h-[500px] group">
                <Image
                  src={project.frontmatter.image}
                  alt={project.frontmatter.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                {project.frontmatter.demoUrl && (
                  <Link
                    href={project.frontmatter.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </Link>
                )}
              </div>
            )}
          </header>

          {/* Content */}
          <ProjectContent content={project.content} />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}