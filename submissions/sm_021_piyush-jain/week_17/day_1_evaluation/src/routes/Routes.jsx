import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from "../component/common/Home"
import Booking from "../component/common/Booking"
import Confirmation from "../component/common/Confirmation"
import Info from "../component/common/Info"
import NotFound from '../component/common/NotFound'
import Login from "../component/auth/Login"
class Routes extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact render={(props)=><Login {...props}/>}></Route>
                    <Route path="/home" exact render={(props)=><Home {...props}/>}></Route>
                    <Route path="/booking" exact render={(props) => <Booking {...props} />} />
                    <Route path="/info/:id" exact render={(props) => <Info {...props} />}></Route>
                    <Route path="/confirm/:id" exact render={(props) => <Confirmation {...props} />}></Route>
                    <Route path component={NotFound}/>
                </Switch>
            </>
        )
    }
}
export default Routes