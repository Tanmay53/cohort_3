import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
class Routes extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact render={()=><Home />}/>
                    <Route path="/Addempdata" exact render={()=><Addempdata />}/>
                    <Route path="/login" exact render={()=><Login />}/>
                    <Route path="/Register" exact render={()=><Register/>}/>
                </Switch>
            </div>
        )
    }
}
export default Route