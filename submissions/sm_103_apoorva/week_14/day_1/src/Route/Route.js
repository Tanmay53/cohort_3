import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import Login from '../components/auth/Login'
import Home from '../components/common/Home'
import Addvehicle from '../components/common/AddVehicle'
import Showvehicle from '../components/common/ShowVehicle'
import EditInfo from '../components/common/EditInfo'

function Routes()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                <h3 className="navbar-brand" >Vehicle Data</h3>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item active ml-2">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/login" component  = {Login} />
                <Route path="/addvehicle" component = {Addvehicle} />
                <Route exact path="/showvehicle" component={Showvehicle} />
                <Route  path = "/showvehicle/:id" component = {(props)=><EditInfo {...props} />} />
            </Switch>
        </div>
    )
}

export default Routes