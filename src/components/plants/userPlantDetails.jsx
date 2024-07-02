//find plants by id that belong to user

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllWtrSchedules } from "../services/waterService";
import { getPlantById } from "../services/plantService";

export const UserPlantDetails = () => {
  const [foundPlant, setFoundPlant] = useState([]);
  const { plantId } = useParams();

  const [waterSchedule, setWaterSchedule] = useState([])
  const [fertSchedule, setFertSchedule] = useState([])

  useEffect(() => {
    getPlantById(plantId).then((data) => {
      setFoundPlant(data);
    });
  }, []);

  useEffect(() => {
    GetAllWtrSchedules().then((array) => {
        setWaterSchedule(array)
    })
  },[]);

  useEffect(() => {
    GetAllFertSchedules().then((array) => {
        setFertSchedule(array)
    })
  },[]);

  return (
    <div>
      <div>
        <img src={foundPlant.img} className="plant-img"></img>
        <h2>--{foundPlant.name}--</h2>
        <p><i>Plant Family: {foundPlant.family}</i></p>
        <p>Special Qualities: {foundPlant.specialQualities}</p>
        <p>Notes: {foundPlant.notes}</p>
      </div>
    </div>
  );
};