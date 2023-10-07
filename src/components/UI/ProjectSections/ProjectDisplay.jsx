import CardBody from "../Card/CardBody";
import "bootstrap/dist/css/bootstrap.min.css";
import CardHeader from "../Card/CardHeader";
export default function ProfileDetailed({ project }) {
  return (
    <div className=" ">
      <div>
      <CardHeader name={project.name} deployedLink={project.deployedLink} />
      <CardBody
        description={project.description}
        github={project.github}
        projectImage={project.projectImage}
      />
    </div>
    </div>
  );
}



{/* <div className=" d-inline-flex flex-column p-2 justify-content-around col-sml-12 col-lg-6 "> */}