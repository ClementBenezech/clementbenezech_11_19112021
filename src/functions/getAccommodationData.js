export const getAccommodationData = () => {
    return new Promise((resolve, reject) => {
          resolve(() => {
            fetch("logements.json")
            .then (response => response.json())
            })
    })
}