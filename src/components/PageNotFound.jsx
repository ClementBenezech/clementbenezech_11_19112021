import react from "react";
import '../styles/pageNotFound.scss'
import { Link } from "react-router-dom";

class PageNotFound extends react.Component {
    render() {
      return (
        <div className = "page-not-found">
          <h1 className = "page-not-found__title">404</h1>
          <div className = "page-not-found__paragraph">Oups! La page que vous demandez n'existe pas!</div>
          <Link className = "page-not-found__link" to="/">Retourner sur la page d'accueil</Link>
        </div>
      )
    }
  }

export default PageNotFound