import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { BlogPost, Project } from './types';

const rootDirectory = path.join(process.cwd());

export async function getBlogPosts() {
  const postsDirectory = path.join(rootDirectory, 'content', 'blog');
  const files = fs.readdirSync(postsDirectory);
  
  const posts = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      const slug = filename.replace(/\.mdx$/, '');
      
      return {
        slug,
        frontmatter: data as BlogPost['frontmatter'],
        content
      };
    })
  );
  
  return posts.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export async function getBlogPostBySlug(slug: string) {
  const postsDirectory = path.join(rootDirectory, 'content', 'blog');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true }
  });
  
  return {
    slug,
    frontmatter: data as BlogPost['frontmatter'],
    content: compiledContent
  };
}

export async function getProjects() {
  const projectsDirectory = path.join(rootDirectory, 'content', 'projects');
  const files = fs.readdirSync(projectsDirectory);
  
  const projects = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      const slug = filename.replace(/\.mdx$/, '');
      
      return {
        slug,
        frontmatter: data as Project['frontmatter'],
        content
      };
    })
  );
  
  return projects.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export async function getProjectBySlug(slug: string) {
  const projectsDirectory = path.join(rootDirectory, 'content', 'projects');
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true }
  });
  
  return {
    slug,
    frontmatter: data as Project['frontmatter'],
    content: compiledContent
  };
}