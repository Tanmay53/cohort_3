import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from '../components/Home'
import RegisterUser from '../components/CreateUser'
import LoginPage from "../components/LoginPage"


export default function MyRoute(props) {
    return (
        <>
            <Switch>
                <Route exact path ='/' component = {Home}/>
                <Route exact path ='/auth/login' component = {LoginPage}/>
                <Route path ='/auth/register' component = {RegisterUser}/>
            </Switch>
        </>
    )
}
