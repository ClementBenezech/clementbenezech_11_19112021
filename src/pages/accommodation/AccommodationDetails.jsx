import react from "react";
import "../../styles/accommodationDetails.scss"
import CollapsableBox from "../../components/CollapsableBox";

class AccommodationDetails extends react.Component {
    constructor (props) {
      super(props);
      this.data = props.accommodation;
    } 
    render() {
      // formatting equipments to render them in a collapsableBox
      let equipmentId = 0;
      const equipmentsArray = this.data.equipments.map(equipment => {
        equipmentId++
        return <div key = {equipmentId}>{equipment}</div>
      })

      //Formatting Tags to render them in the details.
      const tagsArray = this.data.tags.map(tag => {
        return <div key = {tag} className = "accommodation-details__tags__tag">{tag}</div>
      })

      //Creating an array of boolean values representing the rating stars based on the rating value in the json
      const starsArray = [];
      for (let i = 0; i < 5; i++) {
        if (i < this.data.rating) {
          starsArray.push(true)
        } else {
          starsArray.push(false)
        }
      }

      //Mapping previous array and returning the right star icon for each index
      let starKey = 0;
      const starsReactElement = starsArray.map(star => {
        starKey++
        if (star === true) {
          return <i key = {starKey} className="fas fa-star"></i>
        } else {
          return <i key = {starKey} className="far fa-star"></i>
        }
      })

      const splitFullName = this.data.host.name.split(' ');

      return (
        <div className = "accommodation-details">
          <div className = "accommodation-details__left-container">
              <div className = "accommodation-details__name">{this.data.title}</div>
              <div className = "accommodation-details__location">{this.data.location}</div>
              <div className = "accommodation-details__tags">{tagsArray}</div>
          </div>
          <div className = "accommodation-details__right-container">
              <div className = "accommodation-details__host">
                <div className = "accommodation-details__host__fullname">
                    <div>{splitFullName[0]}</div>
                    <div>{splitFullName[1]}</div>
                </div>
                <img className = "accommodation-details__host__picture" src = {this.data.host.picture} alt = {this.data.host.name}/>
              </div>
              <div className = "accommodation-details__rating">{starsReactElement}</div>
          </div>
          <div className = "accommodation-details__detailed-information-container">
            <CollapsableBox key = "description" title = "Description" content = {this.data.description}/>
            <CollapsableBox key = "equipements" title = "Equipements" content = {equipmentsArray}/>
          </div>
        </div>
      )
    }
  }

export default AccommodationDetails