import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer({}) {
  return (
    <div className="d-flex justify-content-center w-auto h-auto p-3">
      <div className="p-2 display-4">
        <a class="icon-link" href="https://github.com/jarrodbb">
          <FontAwesomeIcon
            icon={faGithub}
            className="icon-hover"
          ></FontAwesomeIcon>
        </a>
      </div>
      <a
        class="icon-link"
        href="https://www.linkedin.com/in/jarrod-blanning-b578a7164/"
      >
        <div className="p-2 display-4">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="icon-hover"
          ></FontAwesomeIcon>
        </div>
      </a>
    </div>
  );
}
