import { getBlogPostBySlug, getBlogPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';

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

export default async function BlogPostPage({ params }: Props) {
  try {
    const post = await getBlogPostBySlug(params.slug);

    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <article>
            <div className="text-gray-500 text-[16px] mb-2">
              {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
            <h1 className="text-[40px] mb-10">{post.frontmatter.title}</h1>
            <div className="prose max-w-none prose-img:block prose-img:mx-auto">{post.content}</div>
          </article>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
