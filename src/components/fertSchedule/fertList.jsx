import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GetAllFertSchedules } from "../services/fertService"



export const FertList = ({currentUser}) => {
  const [userFertSchedules, setUserFertSchedules] = useState([])

  const navigate = useNavigate()

  const getAndSetFertSchedule = () => {
      GetAllFertSchedules().then((fertScheduleArray) => {
        
          setUserFertSchedules(fertScheduleArray)
      })
  }

  useEffect(()=> {
    getAndSetFertSchedule()
}, [currentUser])

return (
  <div className="fertSchedule-container">
      <h2>Your Fertilization Schedules</h2>
      <article className="FertSchedules">
          {userFertSchedules.map((fertScheduleObj) => {
              return <div>
                {/* {waterScheduleObj.id}-  */}
                <img src= {fertScheduleObj?.plant?.img}/>
                {fertScheduleObj?.plant?.name} needs fertilized on 
                {fertScheduleObj.date}
            
                <button
              className="filter-btn btn-primary"
              onClick={() => {
                 handleDelete(fertScheduleObj.id)
              }}
          >
              Delete
      </button>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                navigate(`/fertSchedule/EditFertSchedule/${fertScheduleObj.id}`)
              }}
          >
              Edit
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
                  navigate("/FertSchedule/newFertSchedule")
              }}
          >
              Add New
      </button>
  </div>
)
}