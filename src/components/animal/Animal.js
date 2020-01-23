import React from "react"
import "./Animals.css"

export default ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">Name: {animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
    </section>
)