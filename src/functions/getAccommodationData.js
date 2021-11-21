export const getAccommodationData = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(() => {
            fetch("logements.json")
                .then (response => response.json())
                .then (response => {
                    const data = response; //Dans une variable data, on met l'enregistrement renvoyé par l'api
                    console.log(data);
                    const dataset = data.map(accommodation => {
                        if (accommodation.id === id) {
                            return accommodation
                        }
                    })
                    console.log("dataset");
                    console.log(dataset);
                    return dataset;
                })
          });
        }, 300);
    });
    
    
}