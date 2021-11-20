import Nav from './Nav';
import react from "react";
import '../styles/header.scss'
import headerImage from "../images/header.png"

class Header extends react.Component {
    render() {
      return (
    <header className = "header">
      <img className = "header__logo" src = {headerImage} alt = "Logo de Kasa"/>
      {/*Including the Navbar in the header component*/}
      <Nav name = "nav"/>
    </header>
      )
      
    }
  }

export default Header