import { getProjects } from '@/lib/mdx';
import ProjectCard from '@/components/projects/ProjectCard';
import Introduction from '@/components/home/Introduction';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16">
          <Introduction />
        </section>

        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-bold mb-8 text-purple-600 tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-bold mb-8 text-purple-600 tracking-tight">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Haskell', 'Kotlin', 'SQL', 'Scala', 'Git', 'Unix', 'C#', 'C', 'Java', 'Python', 'Prolog', 'Lua', 'Unity VCS', 'Docker'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 transition-colors font-light">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-3xl font-bold mb-8 text-purple-600 tracking-tight">Creative Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 transition-colors">
              <h3 className="font-poppins font-semibold mb-2">Video Production</h3>
              <p className="font-light">YouTube (Vlogging): Premiere Pro</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 transition-colors">
              <h3 className="font-poppins font-semibold mb-2">Animation & Graphics</h3>
              <p className="font-light">Animation: After Effects</p>
              <p className="font-light">Digital Art: Photoshop</p>
              <p className="font-light">3D-modelling: Blender</p>
              <p className="font-light">Shaders: GLSL, Shaderlab</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}