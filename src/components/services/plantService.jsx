//fetch plant data
export const getAllPlants = () => {
    return fetch('http://localhost:8088/plants')
    .then((res) => res.json())
}
//Create new plant
export const createPlant = (plant) => {
    return fetch('http://localhost:8088/plants', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plant),
    })
}
//delete a plant
export const deletePlant = (plantId) => {
    return fetch(`http://localhost:8088/plants/${plantId}`, {
        method: "DELETE",
    })
}
//edit plant
export const updatePlant = (plant) => {
    return fetch(`http://localhost:8088/plants/${plant.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plant)
    })
}

export const getPlantById = (plant) => {
    return fetch(`http://localhost:8088/plants/${plant}`).then((res) => res.json());
}