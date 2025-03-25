import { getProjects } from '@/lib/mdx';
import ProjectCard from '@/components/projects/ProjectCard';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <section id="about" className="mb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 border-4 border-purple-600 rounded-full">
                <Image
                  src="/images/PFPic.jpg"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Serene Liu</h1>
              <p className="text-lg text-gray-600 mb-6">
                Hi! I'm a second year Computer Science student at Imperial College London.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link
                  href="https://www.linkedin.com/in/serene-q-liu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16 scroll-mt-20">
          <h2 className="font-poppins text-3xl font-bold mb-8 text-purple-600 tracking-tight">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {projects
              .filter(project => project.frontmatter.category === 'visual')
              .map((project) => (
                <ProjectCard key={project.slug} project={project} isVisual={true} />
              ))}
          </div>

          <h2 className="font-poppins text-3xl font-bold mb-8 text-purple-600 tracking-tight">Technical Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter(project => project.frontmatter.category === 'technical')
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </section>

        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="font-poppins text-3xl font-bold mb-8 text-purple-600 tracking-tight">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-lg font-semibold">DoCSoC Events Officer</h3>
              <p className="text-sm text-gray-600">Imperial Department of Computing Society • Oct 2024 - Present</p>
              <p className="mt-2 text-sm">
                Elected for Imperial Department of Computing Society's Events Officer Role. 
                Helped run both large and small events including IC Hack 25.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-lg font-semibold">PlayStation Work Experience</h3>
              <p className="text-sm text-gray-600">Sony Interactive Entertainment London UK • Aug 2023 - Sep 2023</p>
              <p className="mt-2 text-sm">
                Learnt shader coding with GLSL + Shadertoy and utilisation of Unity's Render Pipeline 
                to create stylized graphic effects.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-lg font-semibold">Accio Research Contractor</h3>
              <p className="text-sm text-gray-600">Remote • Jul 2023</p>
              <p className="mt-2 text-sm">
                Built a model for smooth interpolation between two known positions of a football player 
                using the Stone Soup framework in Python.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="mb-16 scroll-mt-20">
          <h2 className="font-poppins text-3xl font-bold mb-8 text-purple-600 tracking-tight">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-lg font-semibold">Imperial College London</h3>
              <p className="text-sm text-gray-600">Computing BEng • 2023 - Present</p>
              <p className="mt-2 text-sm">
                First Year (1:1) (79.75%) <br />
                Relevant Modules: Computer Architecture, Functional Programming, 
                Compilers, Object Oriented Programming
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-lg font-semibold">Westminster School</h3>
              <p className="text-sm text-gray-600">A-Levels & Pre-U • 2021 - 2023</p>
              <p className="mt-2 text-sm">
                Maths (A*), Further Maths (A*), Physics (D1/A** eq.), Chemistry (D2/A* eq.)
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-lg font-semibold">Junior Royal Northern College Of Music</h3>
              <p className="text-sm text-gray-600">2018 - 2021</p>
              <p className="mt-2 text-sm">
                DipABRSM Piano (Distinction) <br />
                Grade 8 Piano, Oboe, Organ and Violin (All Distinctions + Merit)
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-16 scroll-mt-20">
          <h2 className="font-poppins text-3xl font-bold mb-8 text-purple-600 tracking-tight">Technical Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
            {['Haskell', 'Kotlin', 'SQL', 'Scala', 'Git', 'Unix', 'C#', 'C', 'Java', 'Python', 'Prolog', 'Lua', 'Unity VCS', 'Docker', 'HTML', 'CSS', 'JavaScript', 'Vercel', 'Firebase'].map((skill) => (
              <div key={skill} className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 transition-colors font-light text-sm">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-3xl font-bold mb-8 text-purple-600 tracking-tight">Creative Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 transition-colors">
              <h3 className="font-poppins font-semibold mb-1.5 text-lg">Video Production</h3>
              <p className="font-light text-sm">YouTube (Vlogging): Premiere Pro</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 transition-colors">
              <h3 className="font-poppins font-semibold mb-1.5 text-lg">Animation & Graphics</h3>
              <p className="font-light text-sm">Animation: After Effects</p>
              <p className="font-light text-sm">Digital Art: Photoshop</p>
              <p className="font-light text-sm">3D-modelling: Blender</p>
              <p className="font-light text-sm">Shaders: GLSL, Shaderlab</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}