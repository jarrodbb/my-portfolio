//import css for header
import "./Header.css";
//Import Nav
import Nav from "./Nav";
//function to handle the header contents
export default function Header() {
    return (
      <>
      <div>
        <h1 className="jarrod-title p-2">Jarrod Blanning</h1>
      </div>
 <Nav />
 </>
    )
}
