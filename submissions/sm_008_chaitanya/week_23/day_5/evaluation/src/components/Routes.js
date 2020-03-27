import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import Form from './Form'
import './styles.css'

class Routes extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <Route path="/" exact render={()=><Home />}/>
                    <Route path="/login" exact render={()=><Login />}/>
                    <Route path="/signup" exact render={()=><SignUp/>}/>
                    <Route path="/staffdata" exact render={()=><Form />}/>
                </Switch>
            </React.Fragment>
        )
    }
}
export default Routes