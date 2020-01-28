import React, { useContext } from "react"
import "./Locations.css"
import { Link } from "react-router-dom"
import { AnimalContext } from "../animal/AnimalProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"

export default ({ location }) => {
    const { animals } = useContext(AnimalContext)
    const { employees } = useContext(EmployeeContext) 

    const allAnimals = animals.filter(ani => ani.locationId === location.id) || []
    const allEmployees = employees.filter(emp => emp.locationId === location.id) || []
    return(
    <section className="location">
        <h3 className="location__name">
            <Link to={`/${location.id}`}>
                {location.name}
            </Link>
        </h3>
        <address className="location__address">{location.address}</address>
        <div>{allAnimals.length} animals</div>
        <div>{allEmployees.length} employees</div>
    </section>
    )
}

