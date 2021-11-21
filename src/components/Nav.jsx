import react from "react";
import { Link } from "react-router-dom";
import '../styles/nav.scss';

class Nav extends react.Component {
    render() {
      return (
        <nav className = "nav">
                  <Link className = "nav__link" to="/">Accueil</Link>
                  <Link className = "nav__link" to="/a-propos">A propos</Link>
        </nav>
      )
    }
  }

export default Nav