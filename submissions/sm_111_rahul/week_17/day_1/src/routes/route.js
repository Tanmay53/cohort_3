import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from '../components/common/Home.js';
import NotFound from '../components/common/Notfound.js';
import Navbar from '../components/common/navbar.js';
import Login from '../components/common/login.js';

export default function Routes() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/> 
                <Route path="/login" component={Login}/> 
                <Route component={NotFound}/>

            </Switch>
            
        </Router>
    )
}
