import react from "react"
import { Route, Router, Routes } from "react-router"

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

//For now we do this but later we'll set up a new Page Content component handling all this.
//import PageContent from './PageContent
import PageContent from "./PageContent";

const AppRoutes = (setCurrentAccommodation, accommodation) => {
    return (
        <Routes>
            <Route path="/fiche-logement/*" element = {
                <fragment>
                <Header/>
                  <div className = "accommodation">
                    <Carousel accommodation = {accommodation}/>
                    <AccommodationDetails accommodation = {accommodation}/>
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
                
            <Route exact path="/" element = {
            <fragment>
            <Header/>
              <div className = "homepage">
                  <PictureBox key = "home" image = {homeImage} width = "90%" height = "20vh" margin = " 0 5%" text = "Chez vous, partout et ailleurs."/>
                  <ResultGrid setCurrentAccommodation = {setCurrentAccommodation}/>
              </div>
            <Footer/>
          </fragment>
            }>
            </Route>

            <Route path="*" element = {
                    <fragment>
                    <Header/>
                    <PageNotFound/>
                    <Footer/>
             </fragment>
            }>
            </Route>
            </Routes>
    )
}
            
export default AppRoutes