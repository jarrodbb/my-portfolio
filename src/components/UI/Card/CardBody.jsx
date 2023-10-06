// import CardContent from "./CardContent";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardBody({
  name,
  description,
  github,
  deployedLink,
  projectImage,
}) {
  return (
    <div
      className="card-body"
      style={{ backgroundImage: `url(${projectImage})` }}
    >
      <section className="ms-2 me-auto">
        <h4>{name}:</h4>
        <h5 className="card-text">{description}</h5>
        <a href={github}>Github</a>
        <br></br>
        <a href={deployedLink}>Check it out</a>
      </section>
    </div>
  );
}
