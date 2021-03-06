import react from "react";
import { serverUrl } from "../../constants/constants";
import Thumb from "./Thumb";


class ResultGrid extends react.Component {
    // initial state
    constructor(props) {
        super(props);
        this.state = {resultSet : null};
      }

    // After initial render, we do fetch the data from the fake API
    componentDidMount() {
        
        // setting up a one second delay so the loader can be seen
        setTimeout(() => {
            // Fetching local file
            fetch(serverUrl+"/logements.json")
            .then (response => response.json())
            .then (response => {
                const data = response;
                //Alter the component state so it re-renders with the new values we got from the API
                this.setState({resultSet : data})
            })
        }, 1000)
    }

    // Rendering the component
    render() {

        // Checking if there is some data in the component state
        if (this.state.resultSet !== null) {
            // Rendering current dataset elements to array
            const reactElementAccommodationArray = this.state.resultSet.map( accommodation => {
                return <Thumb key = {accommodation.id} accommodation = {accommodation} setCurrentAccommodation = {this.props.setCurrentAccommodation}/>
            })
            // Rendering the result grid
            return (
                <div className = "result-grid">
                    {reactElementAccommodationArray}
                </div>
                )
        } else {
            // Render a Loading message
            return (
                <div className = "result-grid">
                    <i className="fas fa-stroopwafel fa-spin result-grid__loader"></i>
                </div>
                )
        }
      
    }
}

export default ResultGrid