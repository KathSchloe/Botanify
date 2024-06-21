import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createPlant } from "../services/plantService"

export const PlantForm = ({ currentUser }) => {
    const [plant, setPlant] = useState({name: "", family: "", specialQualities: "", notes: "", img_link:""})

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (plant.name && plant.family && plant.specialQualities && plant.notes && plant.img) {
            const newPlant = {
                userId: currentUser?.currentUser?.id,
                name: plant.name,
                family: plant.family,
                specialQualities: plant.specialQualities,
                notes: plant.notes,
                img: plant.img,
            }

            createPlant(newPlant).then(() => {
                navigate("/plants")
            })
        } else {
            window.alert("Please fill out all fields")
        }
    }
    
    return (
        <form>
        <h2>New Plant</h2>
        <fieldset>
            <div className="form-group">
                <label>Name
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
                </label>
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
                    Add New Plant
                </button>
            </div>
        </fieldset>                     
    </form>
    )
}