import { AudioLink } from '@/components/common/AudioLink';
import { getBlogPosts } from '@/lib/mdx';

export default async function Home() {
  const posts = await getBlogPosts();

  // Posts sharing a series are listed together under the series title.
  // Series here always show, in this order, even before they have posts.
  const groups: { series?: string; posts: typeof posts }[] = [
    'Things I have realised I dislike',
    'Things I have realised I like',
  ].map((series) => ({ series, posts: [] }));
  for (const post of posts) {
    const { series } = post.frontmatter;
    const group = series && groups.find((g) => g.series === series);
    if (group) group.posts.push(post);
    else groups.push({ series, posts: [post] });
  }

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
            <div className="text-gray-500 text-[20px] mb-2">Contact</div>
            <div className="text-black text-[16px]">serene6197@gmail.com</div>
          </div>

          {/* Right Column - Blog */}
          <div>
            <div className="text-gray-500 text-[20px] mb-2">Blog</div>
            <div className="space-y-4 text-[16px]">
              {groups.map((group) => (
                <div key={group.series ?? group.posts[0].slug}>
                  {group.series && <div className="text-black mb-1">{group.series}</div>}
                  <ul className={`space-y-1 ${group.series ? 'pl-4' : ''}`}>
                    {group.posts.map((post) => (
                      <li key={post.slug}>
                        <AudioLink href={`/blog/${post.slug}`} className="text-black underline hover:no-underline">
                          {post.frontmatter.title}
                        </AudioLink>
                      </li>
                    ))}
                    {group.posts.length === 0 && <li className="text-gray-500">[placeholder]</li>}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
