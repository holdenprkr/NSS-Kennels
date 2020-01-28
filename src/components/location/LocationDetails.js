import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"


export default (props) => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { employees } = useContext(EmployeeContext)

    /*
        This line of code will be explained in the next
        section of the chapter.
    */
    const chosenLocationId = parseInt(props.match.params.locationId, 10)

    const location = locations.find(l => l.id === chosenLocationId) || {}
    const allAnimals = animals.filter(ani => ani.locationId === chosenLocationId) || []
    const allEmployees = employees.filter(emp => emp.locationId === chosenLocationId) || []

    return (
        <section className="location">
            <h3 className="location__name">{ location.name }</h3>
            <div className="location__animals">Currently caring for {allAnimals.map(ani => ani.name).join(", ")}</div>
            <div className="location__employeeLength">We currently have { allEmployees.length } well-trained animal lovers and trainers:</div>
            <div className="location__employees">{allEmployees.map(emp => emp.name).join(", ")}</div>
        </section>
    )

}