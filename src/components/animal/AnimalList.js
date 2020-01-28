import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"

export default (props) => {
    const { animals } = useContext(AnimalContext)

    return (
        <div>
        <button onClick={() => {
            if (localStorage.getItem("kennel_customer")) {
                props.history.push("/animals/create")               
            } else {
                props.history.push("/register")
            }}}>
            Make Appointment
        </button>
        <div className="animals">
        {
            animals.map(ani => {
                
            return <Animal key={ani.id} animal={ani} />
            })
        }
        </div>
        </div>
    )
}