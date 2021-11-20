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

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <fragment>
    <div className="App">

    <Router>

      <Routes>
        
        <Route path="/fiche-logement" element = {<div className = "accommodation"><Carousel/><AccommodationDetails/></div>}>
        </Route>

        <Route path="/a-propos" element = {<div className = "about-us">
            <Header/>
            <PictureBox key = "about" image = {aboutImage} width = "80%" height = "20vh" margin = " 0 10%"/>
            <CoreValues/>
            </div>}>
        </Route>

        <Route path="/404" element = {<div className = "page-not-found"><PageNotFound/></div> }>
        </Route>
          
        <Route path="/" element = {<div className = "homepage">
            <Header/>
            <PictureBox key = "home" image = {homeImage} width = "80%" height = "20vh" margin = " 0 10%" text = "Chez vous, partout et ailleurs."/>
            <ResultGrid/>
            <Footer/>
        </div>}>
        </Route>
       
      </Routes>
      </Router>
    </div>
    </fragment>
  )
}

export default App;
