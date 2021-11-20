import react from "react";
import '../styles/pictureBox.scss';

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
      <div>
            <img className = "picture-box__image" style = {{width : this.width, height : this.height, margin: this.margin}} src = {this.image}></img>
            <div className = "picture-box__text">{this.text}</div>
      </div>      
      )
    }
  }

export default PictureBox