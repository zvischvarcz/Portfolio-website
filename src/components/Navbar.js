import { Link} from "react-router-dom";


function Navbar() {
  
    return (
      <nav className="navWrap">
        <Link className="navBarOptionText" to="/">Home</Link>

        <Link className="navBarOptionText" to="/projects">Projects</Link>

        <Link className="navBarOptionText" to="/contact">Contact</Link>
      </nav>
    );
  }
  
  export default Navbar;