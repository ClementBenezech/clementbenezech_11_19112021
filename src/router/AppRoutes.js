// Importing components needed to handle routing.
import { Route, Switch } from "react-router-dom"

// Importing app components.

// Page content is some sort of meta component: It includes the common components displayed on every page of the app
// Those include the Header, Footer, and site Nav menu
// We can nest specific components inside PageContent for each page (each route)
import PageContent from "../components/PageContent";

import AccommodationDetails from '../pages/accommodation/AccommodationDetails';
import Carousel from '../pages/accommodation/Carousel';
import PageNotFound from '../pages/notFound/PageNotFound';
import ResultGrid from '../pages/home/ResultGrid';
import CoreValues from '../pages/aboutUs/CoreValues';
import PictureBox from '../components/PictureBox';

// Importing Images to display on each page.
import homeImage from '../images/home.png';
import aboutImage from '../images/about.png'

// Importing PATH values (The definition of existing routes)
import { HOMEPAGE } from "./constants/paths";
import { ACCOMMODATION_PAGE } from "./constants/paths";
import { ABOUT_US } from "./constants/paths";
import { NOT_FOUND } from "./constants/paths";

const AppRoutes = (setCurrentAccommodation, accommodation) => {
    return (
            <Switch>

                  <Route path= {ABOUT_US}>
                      <PageContent key = {ABOUT_US}>
                      <div className = "about-us">
                            <PictureBox key = "about" image = {aboutImage} width = "90%" height = "20vh" margin = " 0 5%"/>
                            <CoreValues/>
                      </div>
                      </PageContent>
                  </Route>    

                  <Route path={ACCOMMODATION_PAGE}>
                      <PageContent key={ACCOMMODATION_PAGE}>
                        <div className = "accommodation">
                          <Carousel accommodation = {accommodation}/>
                          <AccommodationDetails accommodation = {accommodation}/>
                        </div>
                      </PageContent>
                  </Route>

                  <Route exact path={HOMEPAGE}>
                    <PageContent key={HOMEPAGE}>
                      <div className = "homepage">
                        <PictureBox key = "home" image = {homeImage} width = "90%" height = "20vh" margin = " 0 5%" text = "Chez vous, partout et ailleurs."/>
                        <ResultGrid setCurrentAccommodation = {setCurrentAccommodation}/>
                      </div>
                    </PageContent>
                  </Route>

                  <Route path = {NOT_FOUND}>
                    <PageContent key = {NOT_FOUND}>
                        <div className = "page-not-found">
                            <PageNotFound/>
                        </div>
                    </PageContent>
                  </Route>

                 

                       
            </Switch>
    )
}
            
export default AppRoutes