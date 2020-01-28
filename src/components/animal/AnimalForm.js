import React, { useContext, useRef } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animals.css"
import { LocationContext } from "../location/LocationProvider"

export default props => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const animalName = useRef("")
    const animalBreed = useRef("")
    const location = useRef(0)

  const constructNewAnimal = () => {
    const locationId = parseInt(location.current.value)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addAnimal({
        name: animalName.current.value,
        breed: animalBreed.current.value,
        locationId: locationId,
        customerId: parseInt(localStorage.getItem("kennel_customer"))
      })
    }
  }

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      <div className="form-group">
        <label htmlFor="animalName">Animal Name</label>
        <input
          type="text"
          id="animalName"
          ref={animalName}
          required
          autoFocus
          className="form-control"
          placeholder="Animal name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="animalBreed">Animal Breed</label>
        <input
          type="text"
          id="animalBreed"
          ref={animalBreed}
          required
          autoFocus
          className="form-control"
          placeholder="Animal breed"
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Assign to location</label>
        <select
          defaultValue=""
          name="location"
          ref={location}
          id="employeeLocation"
          className="form-control"
        >
          <option value="0">Select a location</option>
          {locations.map(e => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit"
        onClick={
          evt => {
            evt.preventDefault() // Prevent browser from submitting the form
            constructNewAnimal()
          }
        }
        className="btn btn-primary">
        Save Animal
</button>
    </form>
  )
}