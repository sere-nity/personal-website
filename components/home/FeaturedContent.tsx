'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '@/components/projects/ProjectCard';
import { BlogPost, Project } from '@/lib/types';

interface FeaturedContentProps {
  title: string;
  description: string;
  items: (BlogPost | Project)[];
  type: 'blog' | 'project';
  linkText: string;
  linkHref: string;
}

export default function FeaturedContent({
  title,
  description,
  items,
  type,
  linkText,
  linkHref
}: FeaturedContentProps) {
  return (
    <section>
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p>{description}</p>
      </motion.div>
      
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link 
          href={linkHref}
          className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
        >
          {linkText}
        </Link>
      </motion.div>
    </section>
  );
}