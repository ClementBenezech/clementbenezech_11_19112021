import Header from "./Header"
import Footer from "./Footer"

const PageContent = (props) => {
    return (
    <fragment>
                <Header/>
                  <div className = "accommodation">
                        {props.children}
                  </div>
                <Footer/>
            </fragment>
    )
}
export default PageContent