import { useEffect, useState } from "react";
import {
  getPlantById,
  editPlant,
} from "../services/plantService.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const EditPlant = ({currentUser}) => {
  const [plant, setMyPlant] = useState({});
  const { plantId } = useParams();

  useEffect(() => {
    getPlantById(plantId).then((data) => {
      const plantObj = data;
      setMyPlant(plantObj);
    });
  }, [plantId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedPlant = {
        id: plant.id,
        userId: currentUser.currentUser.id,
        name: plant.name,
        family: plant.family,
        specialQualities: plant.specialQualities,
        notes: plant.notes,
        img: plant.img,
    };
    editPlant(editedPlant).then(() => {
      navigate("/plants");
    });
  };
  const navigate = useNavigate();

  return (
    <div className="form">
      <form>
        <h2 className="header-edit">Edit Plant</h2>
        <fieldset>
          <div>
          <label>Name
          <input
                        type="text"
                        className="form-control"
                        placeholder={plant.name}
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.name = event.target.value
                            setMyPlant(plantCopy)
                        }}
                    />
                    </label>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Family
                    <input
                        type="text"
                        className="form-control"
                        placeholder={plant.family}
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.family = event.target.value
                            setMyPlant(plantCopy)
                        }}
                    />
                </label>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Special Qualities
                    <input
                        type="text"
                        className="form-control"
                        placeholder={plant.specialQualities}
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.specialQualities = event.target.value
                            setMyPlant(plantCopy)
                        }}
                    />
                </label>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>notes
                    <input
                        type="text"
                        className="form-control"
                        placeholder={plant.notes}
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.notes = event.target.value
                            setMyPlant(plantCopy)
                        }}
                    />
                </label>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Image link
                    <input
                        type="text"
                        className="form-control"
                        placeholder={plant.img}
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.img = event.target.value
                            setMyPlant(plantCopy)
                        }}
                    />
                </label>
            </div>
        </fieldset> 
        <fieldset>
            <div className="form-group">
                <button className="form-btn btn-info"
                    onClick={handleSave}
                >
                    Update Plant
                </button>
            </div>
        </fieldset>                     
    </form>
</div>
    )
}
