import { Project } from "../data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div>
      <h2> {project.title} </h2>
      <img src={project.image} alt={project.title} width={200} />
      <div>
        {project.techs.map(tech => (
        <span key={tech}>{tech}</span>
        ))}
      </div>
      <a href={project.github}> GitHub </a>
    </div>
  );
}
