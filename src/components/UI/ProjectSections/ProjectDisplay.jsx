import CardBody from "../Card/CardBody";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileDetailed({ project }) {
  return (
    <div className="col-sml-12 col-lg-6 p-6 ">
      <CardBody
        name={project.name}
        description={project.description}
        github={project.github}
        deployedLink={project.deployedLink}
        projectImage={project.projectImage}
      />
    </div>
  );
}
