import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dash from "../components/Dash/Dash"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import Add_emp from "../components/Dash/Add_emp"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dash} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/add_emp" component={Add_emp} />
                <Route render={() => <h4>404 Not found</h4>} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes