import react from "react"
import { Route, Router, Routes } from "react-router"

//For now we do this but later we'll set up a new Page Content component handling all this.
//import PageContent from './PageContent
import PageContent from "./PageContent";


const AppRoutes = (context) => {
     return (
    <Router>
    <Routes>
      <Route path="/fiche-logement/*" element = {
        <PageContent>
        </PageContent>
        }>
      </Route>

      <Route path="/a-propos" element = {
      <PageContent>
      </PageContent>
      }>
      </Route>
        
      <Route path="/" element = {
      <PageContent>
      </PageContent>
      }>
      </Route>

      <Route path="*" element = {
            <PageContent>
            </PageContent>
      }>
      </Route>
    </Routes>
    </Router>
     )
}

export default AppRoutes

