export const getAccommodationData = () => {

    fetch("logements.json")
    .then (response => response.json())
    .then (response => {
        const data = response; //Dans une variable data, on met l'enregistrement renvoyé par l'api
        return data;
    })
}



