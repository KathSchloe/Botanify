import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { deletePlant, getAllPlants } from "../services/plantService"
import "./plants.css"



export const PlantList = ({currentUser}) => {
  const [userPlants, setUserPlants] = useState([])

  const navigate = useNavigate()

  const getAndSetPlants = () => {
      getAllPlants().then((plantsArray) => {
        
          setUserPlants(plantsArray)
      })
  }

  useEffect(()=> {
    getAndSetPlants()
}, [currentUser])

const handleDelete = (plantId) => {
    deletePlant(plantId).then(()=> {
        getAndSetPlants()
    })
}


return (
  <div className="plants-container">
      <h2>Your Plant Library:</h2>
      <article className="plants">
          {userPlants.map((plantObj) => {
              return <div>
                Plant Name: {plantObj.name} 
                Plant Family: {plantObj.family} 
                Special Qualities: {plantObj.specialQualities} 
                Notes: {plantObj.notes}
                <img src= {plantObj.img}></img>
                <button
              className="filter-btn btn-primary"
              onClick={() => {
                 handleDelete(plantObj.id)
              }}
          >
              Delete plant
      </button>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                navigate(`/plants/EditPlant/${plantObj.id}`)
              }}
          >
              Edit plant
      </button>
              </div>
          })}
      </article>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                  navigate("/")
              }}
          >
              back
      </button>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                  navigate("/plants/newPlant")
              }}
          >
              Add new plant
      </button>
  </div>
)
}