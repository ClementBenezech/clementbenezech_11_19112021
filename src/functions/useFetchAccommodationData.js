import { useState } from "react";
import { serverUrl } from "../constants/constants";

const useFetchAccommodationData = (url) => {

  const [apiData, setApiData] = useState(null)

  setTimeout(() => {
    // Fetching local file
    fetch(serverUrl+"logements.json")
    .then (response => response.json())
    .then (response => {
        const data = response;
        //Alter the component state so it re-renders with the new values we got from the API
        this.setState({accommodation : data.filter(element => window.location.href.includes(element.id) === true)[0]})
}, 1000)
})
}

export default useFetchAccommodationData