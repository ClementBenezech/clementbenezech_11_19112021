import React from 'react';

//Importing StyleSheet for the app.
import './styles/App.css'

//Importing the URL of the server, defined in constants
import { serverUrl } from './constants/constants'
//Importing the routes definitions
import AppRoutes from './router/AppRoutes'
// Importing withRouter. This will allow us to perform route updates using props.history.push()
import {  withRouter } from "react-router-dom"

// Importing necessary PATHS to be able to identify the current page, and redirect if needed.
import { ACCOMMODATION_PAGE } from './router/constants/paths';
import { NOT_FOUND } from './router/constants/paths';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Creating state value for current accommodation.
    this.state = {accommodation : null};
  }

    // Creating a callback function to update this component State from the Thumb component.
    //Using arrow function to make 'this" available to children.
    setCurrentAccommodation = (accommodationData) => {
      this.setState({accommodation : accommodationData})
    }

    //Handling the cas where someone uses a direct link to a specific rental page.
    //Since we arrived here from "nowhere", the component won't render since there is no current rental defined.
    //So we get the current URL and compare it with data we fetch from the fake API, find the right object
    //And then set this value as a new current rental value in the state, so the component can render.
    componentDidMount() {
        console.log("this.componentDidMount")
        // setting up a one second delay so the loader can be seen
        setTimeout(() => {
          // Fetching local file
                fetch(serverUrl+"logements.json")
                .then (response => response.json())
                .then (response => {
                    const data = response;
                    console.log(data);
                    //Alter the component state so it re-renders with the new values we got from the API
                    //OR set state accommodation to undefined if there is no match (meaning we are on another page (about, not found, home))

                    //Getting accommodation matching the ID in the URL, or undefined if no match.  
                    const urlAccommodation = data.filter(element => window.location.href === element.id)[0];
                    //Checking if the current URL is of type accommodation_page.
                    const currentPageIsAccommodation = window.location.href.includes(ACCOMMODATION_PAGE.replace(/[^a-zA-Z\- ]/g, ""))
                    // Then, if the current URL is of accommodation details type...
                    if (currentPageIsAccommodation === true) {
                      // And if there is a matching accommodation in the API response...
                      if (urlAccommodation !== undefined) {
                        // Define the current Accommodation in the app state.
                        this.setState({accommodation : urlAccommodation})
                      } else {
                        // If there is no match, we set the URL to NOT_FOUND page...
                        this.props.history.push(NOT_FOUND);
                        //We reload the window to display the NOT_FOUND route.
                        window.location.reload();
                      }
                    } else {
                        // If the page is not of 'accommodation details' type, set accommodation to undefined.
                        this.setState({accommodation : undefined})
                    }

        }, 1000)
        })
    }

 
  //Rendering the current page only if a current accommodation is defined
  render () {

          if (this.state.accommodation === null) {
                  return null
          } else {
              return (
                  <fragment>
                      <div className="App">
                            {AppRoutes(this.setCurrentAccommodation, this.state.accommodation)}                
                      </div>
                  </fragment>
          )
        }
    }
}

export default withRouter(App);
