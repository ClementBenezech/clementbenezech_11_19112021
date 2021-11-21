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
    console.log(this.props.location)
  }

  render () {
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
                <PictureBox key = "about" image = {aboutImage} width = "80%" height = "20vh" margin = " 0 10%"/>
                <CoreValues/>
            </div>
          <Footer/>
        </fragment>
        }>
        </Route>

        <Route path="/404" element = {<div className = "page-not-found"><PageNotFound/></div>}>
        </Route>
          
        <Route path="/" element = {
        <fragment>
          <Header/>
            <div className = "homepage">
                <PictureBox key = "home" image = {homeImage} width = "80%" height = "20vh" margin = " 0 10%" text = "Chez vous, partout et ailleurs."/>
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

export default App;
