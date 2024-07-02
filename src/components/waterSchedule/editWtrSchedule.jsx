import { useEffect, useState } from "react";
import {
  GetWtrScheduleById,
  UpdateWtrSchedule,
} from "../services/waterService.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { getAllPlants, getPlantById } from "../services/plantService.jsx";
import { Input } from "reactstrap";

export const EditWtrSchedule = ({currentUser}) => {
  const [wtrSchedule, setWtrSchedule] = useState({});
  const { wtrScheduleId } = useParams();
  const [plantHolder, setPlantHolder] = useState([]);

  useEffect(() => {
    GetWtrScheduleById(wtrScheduleId).then((data) => {
      const wtrScheduleObj = data;
      setWtrSchedule(wtrScheduleObj);
    });
  }, [wtrScheduleId]);

  useEffect(()=> {
    getAllPlants().then((taco) => setPlantHolder(taco))
}, [])

  const handleSave = (event) => {
    event.preventDefault();
    const editedWtrSchedule = {
        id: wtrSchedule.id,
        plantId: wtrSchedule.plant.id,
        userId: wtrSchedule.userId,
        date: wtrSchedule.date,
    };
    UpdateWtrSchedule(editedWtrSchedule).then(() => {
      navigate("/wtrSchedule");
    });
  };
  const navigate = useNavigate();

  return (
    <div className="form">
      <form>
        <h2 className="header-edit">Edit Plant</h2>
        <fieldset>
          <div>
          <label>Plant
          <Input
                        type="select"
                        className="form-control"
                        value={wtrSchedule?.plant?.id}
                        onChange={(event) => {
                            const wtrScheduleCopy = {...wtrSchedule }
                            wtrScheduleCopy.plant.id = event.target.value
                            setWtrSchedule(wtrScheduleCopy)
                        }}
                    >
                      <option>select plant</option>
        {plantHolder.map((taco) => (
          <option key={taco.id} value={taco.id}>
            {taco.name}
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
                        value={wtrSchedule.date}
                        onChange={(event) => {
                            const wtrScheduleCopy = {...wtrSchedule }
                            wtrScheduleCopy.date = event.target.value
                            setWtrSchedule(wtrScheduleCopy)
                        }}
                    />
                </label>
            </div>
        </fieldset>
        
            <div className="form-group">
                <button className="form-btn btn-info"
                    onClick={handleSave}
                >
                    Update Water Schedule
                </button>
            </div>                
    </form>
</div>
    )
}