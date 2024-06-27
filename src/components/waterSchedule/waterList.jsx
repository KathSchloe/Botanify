import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllWtrSchedules } from "../services/waterService"



export const WaterList = ({currentUser}) => {
  const [userWtrSchedules, setUserWtrSchedules] = useState([])

  const navigate = useNavigate()

  const getAndSetWtrSchedule = () => {
      getAllWtrSchedules().then((wtrScheduleArray) => {
        
          setUserWtrSchedules(wtrScheduleArray)
      })
  }

  useEffect(()=> {
    getAndSetWtrSchedule()
}, [currentUser])

return (
  <div className="wtrSchedule-container">
      <h2>Your Watering Schedules</h2>
      <article className="WtrSchedules">
          {userWtrSchedules.map((waterScheduleObj) => {
              return <div>
                {/* {waterScheduleObj.id}-  */}
                {waterScheduleObj?.plant?.name} needs watered on 
                {waterScheduleObj.date}
                <img src= {waterScheduleObj?.plant?.img}></img>
                
              </div>
          })}
      </article>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                  navigate("/WtrSchedule/newWtrSchedule")
              }}
          >
              Add New
      </button>
  </div>
)
}