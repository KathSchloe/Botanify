import { useEffect, useState } from "react";
import {
  GetFertScheduleById,
  UpdateFertSchedule,
} from "../services/fertService.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { getAllPlants, getPlantById } from "../services/plantService.jsx";
import { Input } from "reactstrap";

export const EditFertSchedule = ({currentUser}) => {
  const [fertSchedule, setFertSchedule] = useState({});
  const { fertScheduleId } = useParams();
  const [ plants, setPlants ] = useState([])
const currentUserId = currentUser.currentUser?.id
useEffect(() => {
    getAllPlants().then((data) => {
        setPlants(data)
    })
}, [])

  useEffect(() => {
    GetFertScheduleById(fertScheduleId).then((data) => {
      const fertScheduleObj = data;
      setFertSchedule(fertScheduleObj);
    });
  }, [fertScheduleId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedFertSchedule = {
        id: fertScheduleId,
        plantId: parseInt(fertSchedule.plantId),
        userId: currentUserId,
        date: fertSchedule.date,
    };
    UpdateFertSchedule(editedFertSchedule).then(() => {
      navigate("/fertSchedule");
    });
  };
  const navigate = useNavigate();

  return (
    <div className="form">
      <form>
        <h2 className="header-edit">Edit Fertilization Schedule</h2>
        <fieldset>
          <div>
          <label>Plant
          <Input
                        type="select"
                        className="form-control"
                        value={fertSchedule?.plantId}
                        onChange={(event) => {
                            const fertScheduleCopy = {...fertSchedule }
                            fertScheduleCopy.plantId = event.target.value
                            setFertSchedule(fertScheduleCopy)
                        }}
                    >
                      <option>select plant</option>
        {plants.map((plant) => (
          <option key={plant.id} value={plant.id}>
            {plant.name}
          </option>
        ))}
                    </Input>
                    </label>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Date
                    <input
                        type="date"
                        className="form-control"
                        placeholder={fertSchedule.date}
                        onChange={(event) => {
                            const fertScheduleCopy = {...fertSchedule }
                            fertScheduleCopy.date = event.target.value
                            setFertSchedule(fertScheduleCopy)
                        }}
                    />
                </label>
            </div>
        </fieldset>
        
            <div className="form-group">
                <button className="form-btn btn-info"
                    onClick={handleSave}
                >
                    Update Fertilization Schedule
                </button>
            </div>                
    </form>
</div>
    )
}