import React from "react"
import Home from "../Home"
import { Route } from "react-router-dom"
import Allusers from "../Components/Allusers"
import Adduser from "../Components/Adduser"
import Login from "../Common/Login";

class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    isAuthlogin = () => {
        this.setState({
            isAuth: true
        })
    }
    render() {
        return (
            <>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/allusers" exact render={() => <Allusers />} />
                <Route path="/adduser" exact render={() => <Adduser />} />
                <Route path="/login" exact render={() => <Login />} />
                <Route path="/alluser/:id" exact render={() => <user />} />


            </>
        )
    }
}
export default Router

