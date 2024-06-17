//find plants by id that belong to user

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWaterService } from "../../services/waterService";
import { getPlantById } from "../../services/plantService";

export const CustomerPlantDetails = () => {
  const [foundPlant, setFoundPlant] = useState([]);
  const { plantId } = useParams();

  const [waterSchedule, setWaterSchedule] = useState([])

  useEffect(() => {
    getPlantById(plantId).then((data) => {
      setFoundPlant(data);
    });
  }, []);

  useEffect(() => {
    getWaterService().then((array) => {
        setWaterSchedule(array)
    })
  },[]);

  return (
    <div>
      <div>
        <img src={foundPlant.img} className="flower-img"></img>
        <h2>--{foundPlant.name}--</h2>
        <p><i>Plant Family: {foundPlant.family}</i></p>
        <p>Special Qualities: {foundPlant.specialQualities}</p>
        <p>Notes: {foundPlant.notes}</p>
      </div>
    </div>
  );
};