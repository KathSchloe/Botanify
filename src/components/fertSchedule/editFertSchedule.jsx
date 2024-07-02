import { useEffect, useState } from "react";
import {
  GetFertScheduleById,
  UpdateFertSchedule,
} from "../services/fertService.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const EditFertSchedule = ({currentUser}) => {
  const [fertSchedule, setFertSchedule] = useState({});
  const { fertScheduleId } = useParams();

  useEffect(() => {
    getPlantById(fertScheduleId).then((data) => {
      const fertScheduleObj = data;
      setFertSchedule(fertScheduleObj);
    });
  }, [fertScheduleId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedFertSchedule = {
        id: fertSchedule.id,
        plantId: fertSchedule.plant.id,
        userId: fertSchedule.userId,
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
          <input
                        type="text"
                        className="form-control"
                        placeholder={fertSchedule.plant.name}
                        onChange={(event) => {
                            const fertScheduleCopy = {...fertSchedule }
                            fertScheduleCopy.name = event.target.value
                            setFertSchedule(fertScheduleCopy)
                        }}
                    />
                    </label>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Date
                    <input
                        type="text"
                        className="form-control"
                        placeholder={fertSchedule.date}
                        onChange={(event) => {
                            const fertScheduleCopy = {...fertSchedule }
                            fertScheduleCopy.name = event.target.value
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