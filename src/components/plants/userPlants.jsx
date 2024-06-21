import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPlants } from "../services/plantService"
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

return (
  <div className="plants-container">
      <h2>Your Plant Library:</h2>
      <article className="plants">
          {userPlants.map((plantObj) => {
              return <div>
                {plantObj.name}- 
                {plantObj.family}- 
                {plantObj.specialQualities}
                {plantObj.notes}
                <img src= {plantObj.img}></img>
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
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                  navigate("/delPlant")
              }}
          >
              Delete plant
      </button>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                  navigate("/editPlant")
              }}
          >
              Edit plant
      </button>
  </div>
)
}