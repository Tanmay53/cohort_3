import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../Components/Common/Dashboard'
import AddUser from '../Components/Common/AddUser'
import ViewUser from '../Components/Common/ViewUser'
import Login from '../Components/Auth/Login'
import UpdateUser from '../Components/Common/UpdateUser'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path='/dashboard' render = {()=><Dashboard />} />
                <Route exact path='/login' render = {()=><Login />} />
                <Route exact path='/addUser' render = {()=><AddUser />} />
                <Route exact path='/viewUser' render = {()=><ViewUser />} />
                <Route exact path='/updateUser/:id' render = {() => <UpdateUser />} />
                <Redirect to='/dashboard' />
            </Switch>
        </div>
    )
}
