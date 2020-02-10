import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'
import AddVehicle from '../Components/AddVehicle'
import ViewVehicles from '../Components/ViewVehicles'
import EditVehicle from '../Components/EditVehicle'
import VehicleInfo from '../Components/VehicleInfo'

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/login' component={Login}/>
                    <Route path='/addVehicle' component={AddVehicle}/>
                    <Route path='/viewAllVehicles' component={ViewVehicles}/>
                    <Route path='/edit/:id' component={EditVehicle}/>
                    <Route path='/vehicleInfo/:id' component={VehicleInfo}/>
                    <Route render={()=> <h1>Sorry page not found!!</h1> } />
                </Switch>
            </div>
        )
    }
}
export default Routes