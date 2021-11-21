import react from "react";
import '../styles/collapsableBox.scss'

class CollapsableBox extends react.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;
        this.state = {expanded : false};
        this.contentRef = react.createRef();
      }
    render() {

        return (
            <div className = "collapsable-box">
                <div className = "collapsable-box__title" onClick = {()=> {
                    
                    if (this.state.expanded === false) {
                        this.setState({expanded: true})
                    } else if (this.state.expanded === true) {
                        this.setState({expanded: false})
                    }
                    
                    



                }}>{this.title}</div>
                <div ref = {this.contentRef} className = "collapsable-box__content--hidden">{this.content}</div>
            </div>
        )
    } 

    componentDidUpdate (prevProps, prevState){
        if (prevState.expanded === false) {
            this.contentRef.current.className = "collapsable-box__content"
        } else if (prevState.expanded === true) {
            this.contentRef.current.className = "collapsable-box__content--hidden"
        }
    }
  }

export default CollapsableBox