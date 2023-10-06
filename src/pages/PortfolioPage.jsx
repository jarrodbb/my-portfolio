import { useState, useEffect } from "react";
import Projects from "../components/UI/ProjectSections/ProjectDisplay";
import ListItem from "../components/UI/ListItem";

const project = [
  {
    id: 1,
    name: "Sickie.com",
    description: "Fullstack MVC application, utilising sequelize",
    github: "https://github.com/jarrodbb/patient-zero",
    deployedLink: "https://takesickies-40fabe44386a.herokuapp.com/",
    image: "",
  },
  {
    id: 2,
    name: "Tech Blog",
    description: "Fullstack MVC application, utilising sequelize",
    github: "https://github.com/jarrodbb/Tech-Blog",
    deployedLink: "https://understanding-tech-blog-eefe5bbb75c4.herokuapp.com/",
    image: "",
  },
  {
    id: 3,
    name: "Text Editor",
    description: "PWA with offline functionality",
    github: "https://github.com/jarrodbb/Text-Editor",
    deployedLink: "https://its-a-text-editor-6c1743480971.herokuapp.com/",
    image: "",
  },
  {
    id: 4,
    name: "Note Taker",
    description: "UPDATE",
    github: "https://github.com/jarrodbb/Note-Taker",
    deployedLink:
      "https://organise-your-life-note-taker-5a8022c9039c.herokuapp.com/",
    projectImage: "",
  },
];

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);

  setProjects(project);

  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {projects.map((project) => (
          <ListItem key={project.id}>
            <Projects project={project} />
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
