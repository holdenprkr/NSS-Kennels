import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"

export default (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
              <LocationProvider>
                <CustomerProvider>
                  <Route exact path="/animals">
                    <AnimalList />
                  </Route>
                </CustomerProvider>
              </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}