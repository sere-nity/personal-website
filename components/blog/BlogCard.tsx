import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;
  const { title, date, description, tags, image } = frontmatter;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {image && (
        <div className="relative h-48 w-full">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag: string) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/blog/${slug}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
          
          <Link 
            href={`/blog/${slug}`}
            className="text-blue-600 text-sm hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}