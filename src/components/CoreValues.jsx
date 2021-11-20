import react from "react";
import CollapsableBox from "./CollapsableBox";

class CoreValues extends react.Component {
    render() {
      return (
        <div className = "core-values">
            <CollapsableBox/>
            <CollapsableBox/>
            <CollapsableBox/>
            <CollapsableBox/>
        </div>
      )
      
    }
  }

export default CoreValues