import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64">
              <Image
                src="https://picsum.photos/400/400"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-600 mb-6">
              A passionate web developer crafting beautiful and functional digital experiences.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">My Journey</h2>
          <div className="prose max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'JavaScript/TypeScript',
              'React.js',
              'Next.js',
              'Node.js',
              'Tailwind CSS',
              'PostgreSQL',
              'GraphQL',
              'AWS',
              'Git'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-100 rounded-lg p-4 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Senior Web Developer</h3>
              <p className="text-gray-600">Company Name • 2020 - Present</p>
              <p className="mt-2">
                Led development of multiple web applications using React and Node.js.
                Implemented CI/CD pipelines and improved performance metrics by 40%.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Web Developer</h3>
              <p className="text-gray-600">Previous Company • 2018 - 2020</p>
              <p className="mt-2">
                Developed and maintained client websites using modern JavaScript frameworks.
                Collaborated with designers to implement responsive designs.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
              <p className="text-gray-600">University Name • 2014 - 2018</p>
              <p className="mt-2">
                Focused on web technologies and software engineering principles.
                Graduated with honors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}