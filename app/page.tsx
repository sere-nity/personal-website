import { getBlogPosts, getProjects } from '@/lib/mdx';
import Hero from '@/components/home/Hero';
import FeaturedContent from '@/components/home/FeaturedContent';

export default async function Home() {
  const allPosts = await getBlogPosts();
  const allProjects = await getProjects();
  
  // Get the latest 3 posts and projects
  const featuredPosts = allPosts.slice(0, 3);
  const featuredProjects = allProjects.slice(0, 3);
  
  return (
    <main className="min-h-screen">
      <Hero />
      
      <div className="container mx-auto px-4 py-12 space-y-20">
        <FeaturedContent 
          title="Featured Projects"
          description="Check out some of my recent work"
          items={featuredProjects}
          type="project"
          linkText="View All Projects"
          linkHref="/projects"
        />
        
        <FeaturedContent 
          title="Latest Blog Posts"
          description="Thoughts, tutorials, and insights"
          items={featuredPosts}
          type="blog"
          linkText="View All Posts"
          linkHref="/blog"
        />
      </div>
    </main>
  );
}