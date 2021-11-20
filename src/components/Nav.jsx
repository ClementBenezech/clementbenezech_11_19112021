import react from "react";
import { Link } from "react-router-dom";
import '../styles/nav.scss';

class Nav extends react.Component {
    render() {
      return (
      
        <nav className = "nav">
                  <Link className = "nav__link" to="/">Home</Link>
                  <Link className = "nav__link" to="/a-propos">About</Link>
        </nav>
      )
    }
  }

export default Nav