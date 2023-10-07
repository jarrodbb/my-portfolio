import { Link, useLocation } from "react-router-dom";
import Navbar from "./UI/Navbar";
import "./Nav.css";

export default function Nav() {
  const currentPage = useLocation().pathname;
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
    <div className="test-font">
      <ul className="nav nav-pills  nav-justified ">
        <li className="nav-item ">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            About me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
          >
             Contact me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
      </ul>
      </div>
    </>
    )
   
  }

// import { Link, useLocation } from "react-router-dom";
// import Navbar from "./UI/Navbar";

// export default function Nav() {
//   const currentPage = useLocation().pathname;
//   // The Navbar UI component will render each of the Link elements in the links prop
//   return (
//     <Navbar
//       links={[
//         <Link key={1} className="nav-link text-light" to="/">
//           About me
//         </Link>,
//         <Link key={2} className="nav-link text-light" to="/portfolio">
//           Portfolio
//         </Link>,
//         <Link key={3} className="nav-link text-light" to="/contact">
//           Contact me
//         </Link>,
//         <Link key={4} className="nav-link text-light" to="/resume">
//           Resume
//         </Link>,
//       ]}
//     />
//   );
// }
