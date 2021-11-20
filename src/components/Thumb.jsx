import react from "react";
import "../styles/resultGrid.scss"

class Thumb extends react.Component {
    render() {
      return (
        <div className = "result-grid__card">
            <img alt = {this.props.accommodation.title} className = "result-grid__card__image" src = {this.props.accommodation.cover}></img>
            <div className = "result-grid__card__labels-container">
            <div className = "result-grid__card__name">{this.props.accommodation.title}</div>
                <div className = "result-grid__card__rating">{this.props.accommodation.rating}</div>
                <div className = "result-grid__card__description">{this.props.accommodation.description.split('.')[0]}</div>
                <div className = "result-grid__card__location">{this.props.accommodation.location}</div>
            </div>


        
        </div>
      )
    }
  }

export default Thumb