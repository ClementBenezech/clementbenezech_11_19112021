import '../styles/App.css';

import React from 'react';
import { serverUrl } from '../constants/constants';
import AppRoutes from './AppRoutes';

import {   HashRouter as Router } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {accommodation : null};
  }

  // Creating a callback function to update this component State from the Thumb component.
  //Using arrow function to make 'this" available to children.
  setCurrentAccommodation = (accommodationData) => {
    this.setState({accommodation : accommodationData})
  }

  componentDidUpdate() {
  }

  //Handling the cas where someone uses a direct link to a specific rental page.
  //Since we arrived here from "nowhere", the component won't render since there is no current rental defined.
  //So get the current URL and compare it with data we fetch from the fake API, find the right object
  //And then set this value as a new current rental value in the state, so the component can render.
  componentDidMount() {

    // setting up a one second delay so the loader can be seen
    setTimeout(() => {
      // Fetching local file
      fetch(serverUrl+"logements.json")
      .then (response => response.json())
      .then (response => {
          const data = response;
          //Alter the component state so it re-renders with the new values we got from the API
          this.setState({accommodation : data.filter(element => window.location.href.includes(element.id) === true)[0]})
  }, 1000)
})
}

  render () {
    
    if (this.state.accommodation === null) {
      return null
    } else {
    return (
        <fragment>
        <div className="App">

          <Router>
              {AppRoutes(this.setCurrentAccommodation, this.state.accommodation)}
          </Router>

        
        </div>
        </fragment>
    )
  }
}
}

export default App;
