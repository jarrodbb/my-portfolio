import CardBody from "../Card/CardBody";

export default function ProfileDetailed({ project }) {
  return (
    <div className="card">
      <CardBody
        name={project.name}
        desctiption={project.address}
        github={project.github}
        deployedLink={project.deployedLink}
        projectImage={project.projectImage}
      />
    </div>
  );
}
