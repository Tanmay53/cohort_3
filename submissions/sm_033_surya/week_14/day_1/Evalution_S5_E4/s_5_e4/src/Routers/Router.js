import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "../Components/Home"
import Addvehicle from '../Components/Addvehicle';
import Allvehicles from '../Components/Allvehicles';
import Vehicle from "../Components/Vehicle"
import Login from '../Components/Common/Login';
const Nomatch = ()=>{
    return(
        <div>404:Page NOT FOUND</div>
    )
}

class Router extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/addnewvehicles" exact component={Addvehicle} />
                    <Route path="/allvehicles" exact render={(props) => <Allvehicles {...props} />} />
                    <Route path="/allvehicles/:id" render={(props) => <Vehicle {...props} />} />
                    <Route path="/login" component={Login} />
                    <Route component={Nomatch}/>
                </Switch>
            </div>
        )
    }
}
export default Router