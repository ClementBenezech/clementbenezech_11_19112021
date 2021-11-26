import { Route, Routes } from "react-router"

import AccommodationDetails from '../pages/accommodation/AccommodationDetails';
import Carousel from '../pages/accommodation/Carousel';
import PageNotFound from '../pages/notFound/PageNotFound';
import ResultGrid from '../pages/home/ResultGrid';
import CoreValues from '../pages/aboutUs/CoreValues';

import PictureBox from '../components/PictureBox';

import homeImage from '../images/home.png';
import aboutImage from '../images/about.png'

import { HOMEPAGE } from "./constants/paths";
import { ACCOMMODATION_PAGE } from "./constants/paths";
import { ABOUT_US } from "./constants/paths";
import { NOT_FOUND } from "./constants/paths";


//For now we do this but later we'll set up a new Page Content component handling all this.
//import PageContent from './PageContent
import PageContent from "../components/PageContent";

const AppRoutes = (setCurrentAccommodation, accommodation) => {
    return (
            <Routes>
                  <Route path={ACCOMMODATION_PAGE} element = {
                      <PageContent>
                        <div className = "accommodation">
                          <Carousel accommodation = {accommodation}/>
                          <AccommodationDetails accommodation = {accommodation}/>
                        </div>
                      </PageContent>
                      }>
                  </Route>

                  <Route path= {ABOUT_US} element = {
                      <PageContent>
                      <div className = "about-us">
                            <PictureBox key = "about" image = {aboutImage} width = "90%" height = "20vh" margin = " 0 5%"/>
                            <CoreValues/>
                      </div>
                      </PageContent>
                  }>
                  </Route>
                
                  <Route exact path={HOMEPAGE} element = {

                      <PageContent>
                        <div className = "homepage">
                          <PictureBox key = "home" image = {homeImage} width = "90%" height = "20vh" margin = " 0 5%" text = "Chez vous, partout et ailleurs."/>
                          <ResultGrid setCurrentAccommodation = {setCurrentAccommodation}/>
                        </div>
                      </PageContent>
                  }>
                  </Route>

                  <Route path= {NOT_FOUND} element = {
                    <PageContent>
                        <div className = "page-not-found">
                            <PageNotFound/>
                        </div>
                    </PageContent>

                  }>
                  </Route>
            </Routes>
    )
}
            
export default AppRoutes