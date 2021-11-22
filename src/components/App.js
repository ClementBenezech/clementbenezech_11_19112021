import '../styles/App.css';
import AccommodationDetails from './AccommodationDetails';
import Header from './Header';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import PictureBox from './PictureBox';
import Carousel from './Carousel';
import ResultGrid from './ResultGrid';
import CoreValues from './CoreValues';
import homeImage from '../images/home.png';
import aboutImage from '../images/about.png'
import React from 'react';
import { getAccommodationData } from '../functions/getAccommodationData';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import reactDom from 'react-dom';


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
      fetch("http://localhost:3000/logements.json")
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
          <Routes>
            <Route path="/fiche-logement/*" element = {
              <fragment>
                  <Header/>
                    <div className = "accommodation">
                      <Carousel accommodation = {this.state.accommodation}/>
                      <AccommodationDetails accommodation = {this.state.accommodation}/>
                    </div>
                  <Footer/>
              </fragment>
              }>
            </Route>

            <Route path="/a-propos" element = {
            <fragment>
              <Header/>
                <div className = "about-us">
                    <PictureBox key = "about" image = {aboutImage} width = "90%" height = "20vh" margin = " 0 5%"/>
                    <CoreValues/>
                </div>
              <Footer/>
            </fragment>
            }>
            </Route>

            <Route path="/404" element = {
                   <fragment>
                   <Header/>
                      
                      <PageNotFound/>
                      
                      <Footer/>
            </fragment>
            }>
            </Route>
              
            <Route path="/" element = {
            <fragment>
              <Header/>
                <div className = "homepage">
                    <PictureBox key = "home" image = {homeImage} width = "90%" height = "20vh" margin = " 0 5%" text = "Chez vous, partout et ailleurs."/>
                    <ResultGrid setCurrentAccommodation = {this.setCurrentAccommodation}/>
                </div>
              <Footer/>
            </fragment>
            }>
            </Route>
          </Routes>
          </Router>
        </div>
        </fragment>
    )
  }
}
}

export default App;
