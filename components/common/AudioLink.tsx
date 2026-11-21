import Link from 'next/link';
import { useAudio } from '@/lib/useAudio';

interface AudioLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const AudioLink = ({ href, children, className, target, rel }: AudioLinkProps) => {
  const { playClickSound } = useAudio();
  
  const isInternalLink = href.startsWith('/') || href.startsWith('#');
  
  const handleClick = () => {
    if (isInternalLink) {
      playClickSound();
    }
  };

  if (isInternalLink) {
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  // For external links, use regular anchor tag without audio
  return (
    <a href={href} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
}; 