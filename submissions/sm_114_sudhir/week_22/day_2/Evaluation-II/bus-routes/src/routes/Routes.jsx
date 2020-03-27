import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Home from '../components/common/Home'
import Navbar from '../components/common/Navbar'
import AddCityAddBus from '../components/common/AddCityAddBus'
import EditBus from '../components/common/EditBus'

export default function MyRoute(props) {
    return (
        <React.Fragment>
            <Navbar />

            <Switch>
                <Route exact path ='/' component = {Home} />
                {/* <Route exact path ='/auth/login' component = {(props)=><LoginPage {...props}/>}/> */}
                <Route path = "/auth/login" component = {Login} />
                <Route path ='/auth/register' component = {Register}/>
                <Route path="/addcityandbuses" component = {(props) => <AddCityAddBus {...props} /> } />
                <Route path="/bus/edit/:id" render = {props => <EditBus {...props} />} />
            </Switch>
        </React.Fragment>
    )
}