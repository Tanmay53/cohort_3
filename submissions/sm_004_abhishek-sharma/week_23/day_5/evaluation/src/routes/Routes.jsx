import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NoMatch from "./NoMatch";
import DashboardRoutes from "./DashboardRoutes"

const Routes = props => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact render={props => <Login { ...props } />} />
                <Route path="/register" render={() => <Register />} />
                <Route path="/dash" render={() => <DashboardRoutes />} />
                <Route component={NoMatch} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes

