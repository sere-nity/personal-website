import { AudioLink } from '@/components/common/AudioLink';
import { getBlogPosts } from '@/lib/mdx';

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Name */}
        <h1 className="text-[62px] mb-2">Serene Liu</h1>
        <hr className="border-gray-300 mb-4" />

        {/* Main Content Section */}
        <div className="grid grid-cols-[1fr_1fr] gap-4">
          {/* Left Column - Contact */}
          <div>
            <div className="text-gray-500 text-[18px] mb-2">Contact</div>
            <div className="text-black text-[16px]">serene6197@gmail.com</div>
          </div>

          {/* Right Column - Blog */}
          <div>
            <div className="text-gray-500 text-[18px] mb-2">Blog</div>
            <ul className="space-y-2 text-[16px]">
              {posts.map((post) => (
                <li key={post.slug}>
                  <AudioLink href={`/blog/${post.slug}`} className="text-black underline hover:no-underline">
                    {post.frontmatter.title}
                  </AudioLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
