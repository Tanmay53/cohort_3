import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Register from '../view/user/Register'
import Login from '../view/user/Login'
import CreateBlog from '../view/post/CreateBlog'
import ViewBlog from '../view/post/ViewBlog'
import Dashboad from '../view/post/Dashboard'
import ValiditeLogin from '../view/component/ValidateLogin'
import { useHistory } from "react-router-dom";


export default function Router(props) {
    return (
        <>
            <Switch>
                <Route exact path='/user/login' component={Login}/>
                <Route exact path='/user/register' component={Register}/>
                <Route exact path='/blog/create'>
                    <ValiditeLogin />
                    <CreateBlog history={useHistory()} />
                </Route>
                <Route exact path='/blog/view/:id' component={ViewBlog}/>
                <Route exact path='/blog/dashboard' component={Dashboad}/>
                <Route render = {() => <h3>404 Not Found !</h3>}/>
            </Switch>
        </>
    )
}

