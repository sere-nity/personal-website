import { getBlogPostBySlug, getBlogPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          {post.frontmatter.image && (
            <div className="relative w-full h-[400px] mb-8">
              <Image
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}
          
          <h1 className="text-4xl font-bold mb-4">
            {post.frontmatter.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            
            <div className="flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-xl text-gray-600">
            {post.frontmatter.description}
          </p>
        </header>

        {/* Content */}
        <div className="prose max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
}