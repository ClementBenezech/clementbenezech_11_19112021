import react from "react";
import '../styles/pictureBox.scss';

// This pictureBox is meant a a configurable component. 
// It takes an image and some styling parameters so it can be used in different places.

class PictureBox extends react.Component {
    // initial state
    constructor(props) {
        super(props);
        this.image = props.image;
        this.width = props.width;
        this.height = props.height;
        this.text = props.text;
        this.margin = props.margin;
        this.text = props.text
      }
    render() {
      return (
      <div className = "picture-box">
            <img alt = {this.text} className = "picture-box__image" style = {{width : this.width, margin: this.margin}} src = {this.image}></img>
            <div className = "picture-box__text">{this.text}</div>
      </div>      
      )
    }
  }

export default PictureBox