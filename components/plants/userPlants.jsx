import { useState, useEffect } from "react"
import { getAllPlants } from "../../services/plantService.jsx"
import { useNavigate } from "react-router-dom"



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
                  navigate("/home")
              }}
          >
              back
      </button>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                  navigate("/newPlant")
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