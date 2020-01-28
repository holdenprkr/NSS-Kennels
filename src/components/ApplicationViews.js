import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import AnimalProvider from "./animal/AnimalProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import EmployeeProvider from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import EmployeeForm from "./employee/EmployeeForm"
import AnimalForm from "./animal/AnimalForm"
import AnimalDetails from "./animal/AnimalDetails"
import LocationDetails from "./location/LocationDetails"

export default (props) => {
    return (
        <>
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <EmployeeProvider>
                            <Route exact path="/" render={
                                props => <LocationList {...props} />
                            } />                                                          
                            <Route path="/:locationId(\d+)" render={
                                props => <LocationDetails {...props} />
                            } />
                            <Route exact path="/animals" render={
                                props => <AnimalList {...props} />
                            } />

                            <Route exact path="/animals/create" render={
                                props => <AnimalForm {...props} />
                            } />

                            <Route path="/animals/:animalId(\d+)" render={
                                props => <AnimalDetails {...props} />
                            } />
                            <Route path="/customers">
                                <CustomerList />
                            </Route>
                            <Route exact path="/employees" render={
                                props => <EmployeeList {...props} />
                            } />

                            <Route exact path="/employees/create" render={
                                props => <EmployeeForm {...props} />
                            } />
                        </EmployeeProvider>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )
}