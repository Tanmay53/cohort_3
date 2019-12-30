import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../Views/Login'
import AddStaff from '../Views/AddStaff'
import ViewStaff from '../Views/ViewStaff'
import Dashboard from '../Views/Dashboard'


class Router extends React.Component {
render() {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/addstaff' exact component={AddStaff}/>
            <Route path='/viewstaff' exact component={ViewStaff}/>
            
            <Route render={() =>  <h1>404 Now Found !</h1>}/>
        </Switch>
        )
    }
}

export default Router