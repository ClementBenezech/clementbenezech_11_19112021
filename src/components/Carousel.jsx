import react from "react";
import '../styles/carousel.scss'
import chevronLeft from '../images/chevron-left.png'
import chevronRight from '../images/chevron-right.png'

class Carousel extends react.Component {
    constructor (props) {
        super(props);
        this.data = props.accommodation
        this.state = {pictures : [], currentPictureIndex : 0}
        this.navRef = react.createRef();
    }

    // Moves to the next picture
    navigateRight = () => {         
        if (this.data.pictures.length - 1 === this.state.currentPictureIndex) {
            this.setState({currentPictureIndex : 0})
        } else {
            this.setState({currentPictureIndex : this.state.currentPictureIndex + 1})
        }
    }

    // Moves to the previous picture
    navigateLeft = () => {         
        if (0 === this.state.currentPictureIndex) {
            this.setState({currentPictureIndex : this.data.pictures.length - 1})
        } else {
            this.setState({currentPictureIndex : this.state.currentPictureIndex - 1})
        }
    }

    // After updating the component, hide Nav arrows in case only one picture is available for the rental.
    componentDidUpdate () {
        if (this.data.pictures.length === 1) {
            this.navRef.current.className = "carousel__nav-container--hidden"
        } else {
            this.navRef.current.className = "carousel__nav-container"
        }
    }

    render() { 
        if (this.data.pictures.length > 0) {
            return (
            <div className = "carousel">
                <div className = "carousel__nav-container" ref = {this.navRef}>
                    <img  alt = 'naviguer vers précédente' src = {chevronLeft} className ="carousel__nav-arrow" onClick = { (e) => {
                        this.navigateLeft();}}>
                    </img>
                    <img  alt = 'naviguer vers suivante' src = {chevronRight} className ="carousel__nav-arrow" onClick = { (e) => {
                        this.navigateRight();}}>
                    </img>
                </div>
                <div className = "carousel__picture-count">{(this.state.currentPictureIndex + 1)+"/"+this.data.pictures.length}</div>
                <img alt = 'A rental' className = "carousel__picture" src = {this.data.pictures[this.state.currentPictureIndex]/*this.data.pictures[this.state.currentPictureIndex]*/} ></img>
            </div>
            )
        } else {
            return <div>CHARGEMENT</div>
        }
    }
}

export default Carousel