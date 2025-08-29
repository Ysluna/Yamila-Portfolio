import TodoImg from "../assets/ToDo/ToDo.png";
import VerbumImg from "../assets/Verbum/Home-Verbum.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techs: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "verbum",
    title: "Verbum",
    description: "A funny chat app",
    image: VerbumImg,
    techs: ["React", "Node", "Express", "Socket.io", "TailwindCSS"],
    github: "https://github.com/AlooNDRaa/Verbum",
  },
  {
    id: "todo-app",
    title: "To-Do",
    description: "A To-Do List",
    image: TodoImg,
    techs: ["Nest", "Node", "Next", "TailwindCSS"],
    github: "https://github.com/Ysluna/todo-list-forit",
  },
];
