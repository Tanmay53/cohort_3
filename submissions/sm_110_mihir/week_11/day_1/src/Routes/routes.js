import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Components/auth/Login";
import Dashboard from "../Components/common/Dashboard";
import React from "react";
import { connect } from "react-redux";
import form from "../Components/common/form";
import Home from "../Components/common/Home";
import Display from "../Components/common/Display";
import Error from "../Components/common/Error";
function routes(props) {
    console.log(props);
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/admin" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/form" component={form} />
                <Route path="/display" component={Display} />
                <Route component={Error} />
            </Switch>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};

export default connect(mapStateToProps)(routes);
