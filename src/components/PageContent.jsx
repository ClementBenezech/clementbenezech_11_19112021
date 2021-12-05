import React from "react";
import Header from "./Header"
import Footer from "./Footer"

// This component always displays the header (including nav menu) and footer.
// It also displays the components we have nested in it in the routes definitions. 

class PageContent extends React.Component {
    constructor(props) {
        super(props);
        this.children = this.props.children;
    }

    //Scrolling to the top of the page whenever we display a new pageContent
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <fragment>
                        <Header/>
                            <div className = "accommodation">
                                    {this.children}
                            </div>
                        <Footer/>
            </fragment>
        )
    }
}
export default PageContent