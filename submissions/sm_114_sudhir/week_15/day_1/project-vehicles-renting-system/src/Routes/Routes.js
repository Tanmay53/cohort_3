import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '../components/common/Home'
import Cars from '../components/common/Cars'
import Location from '../components/common/Location'
import Offers from '../components/common/Offers'
import About from '../components/common/About'
import Contact from '../components/common/Contact'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import Navbar from '../components/ReusableCom/Navbar'



function Routes() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/" component = {Home} />
                {/* <Route path="/home" render = {Home} /> */}
                <Route path="/offers" component = {Offers} />
                <Route path="/cars" component = {Cars} />
                <Route path="/location" component = {Location} />
                <Route path="/contact" component = {Contact} />
                <Route path="/signIn" component = {SignIn} />
                <Route path="/signUp" component = {SignUp} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes
