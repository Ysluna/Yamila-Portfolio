import { Project } from "../data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white text-black rounded-xl shadow-md overflow-hidden w-80">
      {/* Imagen del proyecto */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />

      {/* Contenido */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{project.description}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techs.map((tech) => (
            <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="text-green-600 font-medium hover:underline"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
