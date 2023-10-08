//Import carbody
import CardBody from "../Card/CardBody";
//Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Import Cardheader
import CardHeader from "../Card/CardHeader";


//Function to handle the projects
//Split into header and body
//Props passed down to specific sections
export default function ProfileDetailed({ project }) {
  return (
    <div className=" ">
      <div>
        <CardHeader name={project.name} deployedLink={project.deployedLink} github={project.github} />
        <CardBody
          description={project.description}
          deployedLink={project.deployedLink}
          projectImage={project.projectImage}
        />
      </div>
    </div>
  );
}

