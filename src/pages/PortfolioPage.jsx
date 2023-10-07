import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "../components/UI/ProjectSections/ProjectDisplay";
import ListItem from "../components/UI/ListItem";
import sickieImg from "../assets/images/sickie.png";
import techImg from "../assets/images/tech-blog.png";
import textImg from "../assets/images/PWA.png";
import noteImg from "../assets/images/note-taker.png";
import movieImg from "../assets/images/movie.png";
import weatherImg from "../assets/images/weather.png";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    id: 1,
    name: "Sickie.com",
    description: "Fullstack MVC application, utilising sequelize",
    github: "https://github.com/jarrodbb/patient-zero",
    deployedLink: "https://takesickies-40fabe44386a.herokuapp.com/",
    projectImage: sickieImg,
  },
  {
    id: 2,
    name: "Tech Blog",
    description: "Fullstack MVC application, utilising sequelize",
    github: "https://github.com/jarrodbb/Tech-Blog",
    deployedLink: "https://understanding-tech-blog-eefe5bbb75c4.herokuapp.com/",
    projectImage: techImg,
  },
  {
    id: 3,
    name: "Text Editor",
    description: "PWA with offline functionality",
    github: "https://github.com/jarrodbb/Text-Editor",
    deployedLink: "https://its-a-text-editor-6c1743480971.herokuapp.com/",
    projectImage: textImg,
  },
  {
    id: 4,
    name: "Note Taker",
    description: "Express.js",
    github: "https://github.com/jarrodbb/Note-Taker",
    deployedLink:
      "https://organise-your-life-note-taker-5a8022c9039c.herokuapp.com/",
    projectImage: noteImg,
  },
  {
    id: 5,
    name: "Weather Dashboard",
    description: "API to fetch weather information",
    github: "https://github.com/jarrodbb/weather-dashboard",
    deployedLink: "https://jarrodbb.github.io/weather-dashboard/",
    projectImage: weatherImg,
  },
  {
    id: 6,
    name: "Movie Buff",
    description: "API to fetch movies",
    github: "https://github.com/jarrodbb/Movie-buff",
    deployedLink: "https://bemonn.github.io/Movie-buff/",
    projectImage: movieImg,
  },
];

export default function PortfolioPage() {
  // const [projects, setProjects] = useState([]);
  return (
    <>
      <div className="title-boarder rounded-circle">
        <h1>Portfolio</h1>
      </div>
      <div className="container pt-4">
        <div className="row gx-1 justify-content-center ">
          {projects.map((project) => (
            <div key={project.id} className="  p-3 col-sml-12 col-md-6 ">
              <Projects key={project.id} project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// <ListItem key={project.id}>
{
  /* // return (
//   <>
//     <div className="title-boarder rounded-circle">
//     <h1 >Portfolio</h1>
//     </div>
    
//       <div className="container p-3 justify-content-center" style={{height: "100%"}}>
//         <div className="row ">
//           {projects.map((project) => (
//             <Projects key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
    
//   </>
// ); */
}
