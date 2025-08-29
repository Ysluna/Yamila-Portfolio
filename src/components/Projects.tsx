import { projects } from "../data/projects";
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}