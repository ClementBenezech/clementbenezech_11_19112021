import react from "react";
import "../styles/accommodationDetails.scss"
import CollapsableBox from "./CollapsableBox";

class AccommodationDetails extends react.Component {
    constructor (props) {
      super(props);
      this.data = props.accommodation;
    } 
    render() {
      return (
        <div className = "accommodation-details">
          <div className = "accommodation-details__left-container">
              <div className = "accommodation-details__name">{this.data.title}</div>
              <div className = "accommodation-details__location">{this.data.location}</div>
              <div className = "accommodation-details__tags">{this.data.tags}</div>
          </div>
          <div className = "accommodation-details__right-container">
              <div className = "accommodation-details__host">{this.data.host.name}</div>
              <div className = "accommodation-details__rating">{this.data.rating}</div>
          </div>
          <div className = "accommodation-details__detailed-information-container">
            <CollapsableBox title = "Description" content = {this.data.description}/>
            <CollapsableBox title = "Equipements" content = {this.data.equipments}/>
          </div>
        </div>
      )
    }
  }

export default AccommodationDetails