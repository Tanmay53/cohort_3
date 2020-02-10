import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/common/Homepage'
import Authentication from '../components/auth/Authentication'
const Routes = () => {
    return (
        <React.Fragment>
            <Route path = "/" exact component = {HomePage} />
            <Switch>
                <Route path = "/logout" component = {Authentication} />
                <Route path = "/login" component = {Authentication} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes
