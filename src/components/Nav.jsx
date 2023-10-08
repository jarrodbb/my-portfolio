//Import from react router dom
import { Link, useLocation } from "react-router-dom";

//Import css
import "./Nav.css";

export default function Nav() {
  const currentPage = useLocation().pathname;
  // The Navbar UI component will render each of the Link elements in the links prop
  // Conditional formating added to highlight the active link
  // The link sends the user to the correct page when clicked
  return (
    <>
      <div className="test-font">
        <ul className="nav nav-pills  nav-justified ">
          <li className="nav-item ">
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                currentPage === "/portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                currentPage === "/contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={
                currentPage === "/resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
