import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createWtrSchedule } from "../../services/waterService.jsx";
import { Button, Input, Form } from "reactstrap";
import "./waterSchedule.css"

export const createWtrSchedule = ({ currentUser }) => {
  const [newWtrSchedule, setNewWtrSchedule] = useState({ plantName: "" });

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const newWtrSchedule = {
      userId: currentUser.id,
      plantName: newWtrSchedule.plantName,
    };
    createWtrSchedule(newWtrSchedule).then(() => {
      navigate("/wtrScheduleDetails");
    });
  };

  
  return (
    <Form>
        <h2 className="header-new-wtrSchedule">Add New Water Schedule</h2>
        <div>
        <Input
          type="text"
          text="text"
          placeholder="Plant Name"
          onChange={(event) => {
            const nurseryCopy = { ...newWtrSchedule };
            wtrScheduleCopy.plantName = event.target.value;
            setNewWtrSchedule(wtrScheduleCopy);
          }}
        />
        </div>
      <fieldset>
        <Button color="success" size="sm" onClick={handleSave}>
          Submit
        </Button>
      </fieldset>
    </Form>
  );
};
