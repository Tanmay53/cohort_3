import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from '../components/Home'
import RegisterUser from '../components/CreateUser'
import LoginPage from "../components/LoginPage"
import Userdetail from '../components/Userdetail'
import BlogWrite from "../components/BlogWrite"


export default function MyRoute(props) {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path ='/' component = {Home}/>
                <Route exact path ='/auth/login' component = {(props)=><LoginPage {...props}/>}/>
                <Route path ='/auth/register' component = {RegisterUser}/>
                <Route exact path ="/user" component = {Userdetail}/>
                <Route path ="/user/newblog" component={BlogWrite}/>
            </Switch>
        </React.Fragment>
    )
}
