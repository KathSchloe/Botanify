import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form } from "reactstrap";
import "./waterSchedule.css"
import { NewWtrSchedule } from "../services/waterService";
import { getAllPlants } from "../services/plantService";

export const CreateWtrSchedule = ({ currentUser }) => {
  const [newWtrSchedule, setNewWtrSchedule] = useState({});
  const [plantHolder, setPlantHolder] = useState([]);

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const wtrScheduleCopy = {...newWtrSchedule}
    wtrScheduleCopy.userId= currentUser?.currentUser?.id
    console.log(wtrScheduleCopy)
    NewWtrSchedule(wtrScheduleCopy).then(() => {
      navigate("/wtrSchedule");
    });
  };

  useEffect(()=> {
    getAllPlants().then((taco) => setPlantHolder(taco))
}, [])
  
  return (
    <Form>
        <h2 className="header-new-wtrSchedule">Add New Water Schedule</h2>
        <fieldset>
        <div>
        <Input
          type="select"
          placeholder="Plant Name"
          onChange={(event) => {
            const wtrScheduleCopy = { ...newWtrSchedule };
            wtrScheduleCopy.plantId = parseInt(event.target.value);
            setNewWtrSchedule(wtrScheduleCopy);
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
            const wtrScheduleCopy = { ...newWtrSchedule };
            wtrScheduleCopy.date = event.target.value;
            setNewWtrSchedule(wtrScheduleCopy);
          }}
        />
        </div>
        </fieldset>
      <fieldset>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                  navigate("/wtrSchedule")
              }}
          >
              back
      </button>
        <Button color="success" size="sm" onClick={handleSave}>
          Submit
        </Button>
      </fieldset>
    </Form>
  );
};


