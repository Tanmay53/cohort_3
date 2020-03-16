import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from '../components/Home'
import RegisterUser from '../components/CreateUser'
import LoginPage from "../components/LoginPage"
import Userdetail from '../components/Userdetail'


export default function MyRoute(props) {
    return (
        <>
            <Switch>
                <Route exact path ='/' component = {Home}/>
                <Route exact path ='/auth/login' component = {(props)=><LoginPage {...props}/>}/>
                <Route path ='/auth/register' component = {RegisterUser}/>
                <Route path ="/user" component = {Userdetail}/>
            </Switch>
        </>
    )
}
