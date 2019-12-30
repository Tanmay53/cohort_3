import React from "react";
import "./App.css";
import Form from "./components/Form";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Route, Link, Switch } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <h1>API Mocker</h1>
            <Link to="/registration">
                <button className="btn btn-primary p-2 m-2">
                    {" "}
                    Registration
                </button>
            </Link>
            <Link to="/login">
                <button className="btn btn-primary p-2 m-2"> Login</button>
            </Link>
            <Switch>
                <Route path="/registration" component={Form} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    );
}

export default App;
