import { ProjectType } from "../types/project";

interface ProjectComponentProps {
  project: ProjectType;
}

export default function ProjectComponent({ project }: ProjectComponentProps) {
  return (
    <div className="border rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
