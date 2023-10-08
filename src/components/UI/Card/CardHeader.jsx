//Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Import icon
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//Import CSS
import "./CardHeader.css";

//Function to handle the cardheader contents 
//Props passed from parent. 
export default function CardHeader({ name, deployedLink, github }) {
  return (
    <div className="container title-for-card  ">
      <div className="card-header d-flex flex-row align-items-center  ">
        <div>
          <a
            href={deployedLink}
            style={{ color: "black" }}
            className="  me-auto "
          >
            <h2 className="test">{name}</h2>
          </a>
        </div>
        <div className="p-2 display-4">
          <a className="icon-link" href={github}>
            <FontAwesomeIcon
              icon={faGithub}
              className="icon-hover"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}
