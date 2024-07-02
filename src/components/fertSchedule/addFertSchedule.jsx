import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form } from "reactstrap";
import "./fertSchedule.css"
import { CreateFertSchedule } from "../services/fertService";
import { getAllPlants } from "../services/plantService";

export const NewFertSchedule = ({ currentUser }) => {
  const [newFertScheduleState, setNewFertSchedule] = useState({});
  const [plantHolder, setPlantHolder] = useState([]);

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const currentFertSchedule = {...newFertScheduleState}
//    currentFertSchedule.userId= currentUser?.currentUser?.id
    console.log(currentFertSchedule)
    CreateFertSchedule(currentFertSchedule).then(() => {
      navigate("/fertSchedule");
    });
  };

  useEffect(()=> {
    getAllPlants().then((taco) => setPlantHolder(taco))
}, [])
  
  return (
    <Form>
        <h2 className="header-new-fertSchedule">Add New Fertilization Schedule</h2>
        <fieldset>
        <div>
        <Input
          type="select"
          placeholder="Plant Name"
          onChange={(event) => {
            const fertScheduleCopy = { ...newFertScheduleState };
            fertScheduleCopy.plantId = parseInt(event.target.value);
            setNewFertSchedule(fertScheduleCopy);
          }}
        > 
        <option>select plant</option>
        {plantHolder.map((taco) => (
          <option key={taco.id} value={taco.id}>
            {taco.name}
          </option>
        ))}
        </Input>
        <Input
          type="date"
          placeholder="date"
          onChange={(event) => {
            const fertScheduleCopy = { ...newFertScheduleState };
            fertScheduleCopy.date = event.target.value;
            setNewFertSchedule(fertScheduleCopy);
          }}
        />
        </div>
        </fieldset>
      <fieldset>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                  navigate("/fertSchedule")
              }}
          >
              back
      </button>
        <Button color="success" size="sm" onClick={(evt)=>{handleSave(evt)}}>
          Submit
        </Button>
      </fieldset>
    </Form>
  );
};
