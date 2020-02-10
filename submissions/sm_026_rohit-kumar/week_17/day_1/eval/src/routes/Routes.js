import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from '../components/auth/Login'
import Dashboard from '../components/Dashboard'
import {connect} from 'react-redux'
import Booking from '../components/Booking'



class Routes extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {

        }
    }
    render() {
        
        return (
            <div>
                <Switch>
                    <Route exact path = '/' component={Dashboard} />
                    <Route exact path = '/login' component={Login} />
                    <Route exact path = '/booking' component={Booking} />
                    <Route exact render={() => <h3>404 Not Found !</h3>} />
                </Switch>   
            </div>
        )
    }
}

export default Routes