import React, { useState, useEffect } from "react"
import {withRouter} from "react-router-dom"

/*
    The context is imported and used by individual components
    that need data
*/
export const AnimalContext = React.createContext()

/*
 This component establishes what data can be used.
 */
const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimal = animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals).then(props.history.push("/animals"))
    }

    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getAnimals()
    }, [])

    useEffect(() => {
        console.log("****  ANIMAL APPLICATION STATE CHANGED  ****")
    }, [animals])

    return (
        <AnimalContext.Provider value={{
            animals, addAnimal, releaseAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}

export default withRouter(AnimalProvider)