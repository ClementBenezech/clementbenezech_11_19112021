import react from "react";
import "../styles/resultGrid.scss"
import { Link } from "react-router-dom";

class Thumb extends react.Component {
    render() {
      return (
        <Link   to={"/fiche-logement/"+ this.props.accommodation.id} 
                className = "result-grid__card" 
                onClick = { () => {
                    console.log("setting current accommodation to"+this.props.accommodation.id )
                    this.props.setCurrentAccommodation(this.props.accommodation)}}>

            <img alt = {this.props.accommodation.title} className = "result-grid__card__image" src = {this.props.accommodation.cover}></img>
            <div className = "result-grid__card__labels-container">
                <div className = "result-grid__card__name">{this.props.accommodation.title}</div>
                {/*<div className = "result-grid__card__rating">{this.props.accommodation.rating}<i class="fas fa-star"></i></div>
                <div className = "result-grid__card__description">{this.props.accommodation.description.split('.')[0]}</div>
                <div className = "result-grid__card__location">{this.props.accommodation.location}</div>*/}
              </div>


        
        </Link>
      )
    }
  }

export default Thumb