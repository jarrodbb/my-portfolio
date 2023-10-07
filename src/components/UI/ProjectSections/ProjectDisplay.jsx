import CardBody from "../Card/CardBody";
import "bootstrap/dist/css/bootstrap.min.css";
import CardHeader from "../Card/CardHeader";


export default function ProfileDetailed({ project }) {
  return (
    <div className=" ">
      <div>
        <CardHeader name={project.name} deployedLink={project.deployedLink} github={project.github} />
        <CardBody
          description={project.description}
          
          projectImage={project.projectImage}
        />
      </div>
    </div>
  );
}

