import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { DeleteWtrSchedule, GetAllWtrSchedules } from "../services/waterService"



export const WaterList = ({currentUser}) => {
  const [userWtrSchedules, setUserWtrSchedules] = useState([])

  const navigate = useNavigate()

  const getAndSetWtrSchedule = () => {
      GetAllWtrSchedules().then((wtrScheduleArray) => {
        
          setUserWtrSchedules(wtrScheduleArray)
      })
  }

  const handleDelete = (waterSchedule) => {
    DeleteWtrSchedule(waterSchedule.id).then(() => {
      GetAllWtrSchedules().then((wtrScheduleArray) => {
        setUserWtrSchedules(wtrScheduleArray);
      });
    });
  };

  useEffect(()=> {
    getAndSetWtrSchedule()
}, [currentUser])

return (
  <div className="wtrSchedule-container">
      <h2>Your Watering Schedules</h2>
      <article className="WtrSchedules">
          {userWtrSchedules.map((waterScheduleObj) => {
              return <div key={waterScheduleObj.id}>
                {/* {waterScheduleObj.id}-  */}
                <img src= {waterScheduleObj?.plant?.img}></img>
                {waterScheduleObj?.plant?.name} needs watered on 
                {waterScheduleObj.date}
            
                <button
              className="filter-btn btn-primary"
              onClick={() => {
                 handleDelete(waterScheduleObj)
              }}
          >
              Delete
      </button>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                navigate(`/wtrSchedule/EditWtrSchedule/${waterScheduleObj.id}`)
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
                  navigate("/WtrSchedule/newWtrSchedule")
              }}
          >
              Add New
      </button>
  </div>
)
}