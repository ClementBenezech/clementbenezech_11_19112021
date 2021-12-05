import react from "react";
import kasaImage from "../images/kasa.png"
import '../styles/footer.scss'

class Footer extends react.Component {
    render() {
      return (
          <div className = "footer">
                <img alt = {'Logo Kasa'} className = "footer__image" src = {kasaImage}/>
                <div className = "footer__copyright">© 2020 Kasa. All rights reserved</div>
          </div>
            )
    }
  }

export default Footer