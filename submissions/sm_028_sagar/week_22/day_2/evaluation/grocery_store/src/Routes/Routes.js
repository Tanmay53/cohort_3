import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Component/Home'
import Login from '../Component/Auth/Login'
import Register from '../Component/Auth/Register'
import NotFound from '../Component/NotFound'
import Admin from '../Component/Admin'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={(props) => <Home />}></Route>
                <Route exact path='/login' render={(props) => <Login />}></Route>
                <Route exact path='/register' render={(props) => <Register />}></Route>
                <Route exact path='/admin' render={(props) => <Admin />}></Route>

                <Route path='*' render = {(props) => <NotFound/>} />
            </Switch>
        </div>
    )
}
