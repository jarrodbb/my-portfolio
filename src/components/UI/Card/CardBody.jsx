//Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Import specific css
import "./CardBody.css";
//Function to handle the cardbody
//Props passed down from parent 
export default function CardBody({ description, deployedLink, projectImage }) {
  return (
    <div className="card-body">
      <div className="img__wrap">
        <section
          className=" p-1 img__img box-image "
          style={{ backgroundImage: `url(${projectImage})` }}
        ></section>
        <a href={deployedLink}>
          <p className="img__description">{description}</p>{" "}
        </a>
      </div>
    </div>
  );
}

