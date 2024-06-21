import { useEffect, useState } from "react";
import {
  getPlantById,
  updatePlant,
} from "../../services/plantService.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const editPlant = () => {
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
        userId: currentUser,
        name: plant.name,
        family: plant.family,
        specialQualities: plant.specialQualities,
        notes: plant.notes,
        image: plant.img,
    };
    updatePlant(editedPlant).then(() => {
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
          <input
                        type="text"
                        className="form-control"
                        placeholder="plant name"
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.name = event.target.value
                            setPlant(plantCopy)
                        }}
                    />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Family
                    <input
                        type="text"
                        className="form-control"
                        placeholder="plant family"
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.family = event.target.value
                            setPlant(plantCopy)
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
                        placeholder="plant special qualities"
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.specialQualities = event.target.value
                            setPlant(plantCopy)
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
                        placeholder="plant notes"
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.notes = event.target.value
                            setPlant(plantCopy)
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
                        placeholder="image link goes here"
                        onChange={(event) => {
                            const plantCopy = {...plant }
                            plantCopy.img = event.target.value
                            setPlant(plantCopy)
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
