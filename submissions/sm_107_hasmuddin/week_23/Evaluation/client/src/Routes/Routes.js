import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
import AddTeachers from "../components/Teachers/AddTeachers"

function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={Home} />
                <PrivateRoute path="/add" exact component={AddTeachers} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Register} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes
