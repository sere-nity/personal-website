export interface BlogPost {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
      tags: string[];
      image?: string;
    };
    content: React.ReactNode;
  }
  
  export interface Project {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
      tags: string[];
      image: string;
      demoUrl?: string;
      githubUrl?: string;
    };
    content: React.ReactNode;
  }