import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import Navbar from './Navbar'
import Hiring from './Hiring'

class Routes extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path="/" exact render={()=><Home />}/>
                    <Route path="/login" exact render={()=><Login />}/>
                    <Route path="/signup" exact render={()=><SignUp/>}/>
                    <Route path="/jobopenings" exact render={()=><Hiring />}/>
                </Switch>
            </React.Fragment>
        )
    }
}
export default Routes