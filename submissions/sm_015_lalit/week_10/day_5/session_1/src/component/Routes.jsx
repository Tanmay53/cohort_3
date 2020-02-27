import React from 'react'
import Registerx from './Registerx';
import Login from './Login';
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard';

class Routes extends React.Component{
    render(){
        return(
            <>
            <Route exact path="/" render={()=><Login/>} /> 
            <Route path="/signup" render={()=><Registerx/>} />
            <Route path="/dashboard" render={()=><Dashboard/>} />
            </>
        )
    }
}
export default Routes