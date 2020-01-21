import React from 'react'
import {Route,Switch} from 'react-router-dom'
import UserList from '../components/Common/UserList'
import Home from '../components/Common/Home';
import NotFound  from "../components/Common/NotFound"
import SignIn from '../components/Auth/Login'
import Dashboard from '../components/Common/Dashboard';
import AddingCustomer from '../components/Common/AddingCustomer';
import UpdateUser from '../components/Common/UpdateUser';



export default function MyRoutes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/AddStaff" component={AddingCustomer} />
                <Route path="/ShowStaff" exact component={UserList} />
                <Route path="/auth" component={SignIn} />
                <Route path ="/dashboard" component ={Dashboard}/>
                <Route path="/ShowStaff/:id" component={UpdateUser} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}






