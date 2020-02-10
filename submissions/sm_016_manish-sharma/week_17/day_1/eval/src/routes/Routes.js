import React from "react";
import { Route, Switch } from 'react-router-dom'
import Home from "../components/common/Home";
import BookingPage from "../components/common/BookingPage";
import Confirmation from "../components/common/Confirmation";
import Orders from "../components/common/Orders";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Error from "../components/common/Error";

class Routes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' render={()=><Home/>}/>
                    <Route exact path='/bookingpage/:id' render={()=><BookingPage/>}/>
                    <Route exact path='/confirm/:id' render={(props)=> <Confirmation {...props}/>}/>
                    <Route exact path='/orders' render={()=><Orders/>}/>
                    <Route exact path='/login' render={()=><Login/>}/>
                    <Route exact path='/register' render={()=><Register/>}/>
                    <Route render={()=><Error/>}/>
                </Switch>
            </div>
        )
    }
}

export default Routes