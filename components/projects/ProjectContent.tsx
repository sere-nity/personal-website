'use client';

interface ProjectContentProps {
  content: React.ReactNode;
}

export default function ProjectContent({ content }: ProjectContentProps) {
  return (
    <div className="prose max-w-none">
      <style jsx global>{`
        .prose h1:first-of-type,
        .prose h1:first-of-type + p {
          display: none;
        }
      `}</style>
      <div className="prose-headings:text-2xl prose-headings:font-bold prose-headings:mb-4 prose-p:text-xl prose-p:text-gray-600 prose-p:mb-4 prose-ul:text-xl prose-ul:text-gray-600">
        {content}
      </div>
    </div>
  );
} 