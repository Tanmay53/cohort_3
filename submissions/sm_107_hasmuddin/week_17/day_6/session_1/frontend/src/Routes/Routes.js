import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route  path="/" exact render={()=><Redirect to="/login"/>}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Register}/>
            <Route  render={()=><h4>404 Not found</h4>}/>
            </Switch>
        </BrowserRouter>
    )
}
