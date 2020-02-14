import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar"
import Home from "../components/Home";
import Order from "../components/Order";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";


class Routes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {

        axios.get("/room.json")
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    data: res.data.room
                });

            })
            .catch(error => console.log(error))
    }



    render() {
        console.log("routes", this.state.data);
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home data={this.state.data} />
                    </Route>

                    <Route path="/order">
                        <Order />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </>
        )
    }

}

export default Routes;