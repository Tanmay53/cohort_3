import React, { Component } from 'react'
import { Route, Link, BrowserRouter} from 'react-router-dom'
import Home from './Home'
import SignIn from './Signin'
import SignUp from './Signup'
import Product from './Product'
import About from './About'
import Navbar from './Home/navbar'


export default class Routing extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <div className="container">
                    <Navbar/>
                </div> */}
                <Route path="/" exact component = {Home} />
                <Route path="/about" component={About} />
                <Route path="/product" component = {Product} />
                <Route path="/signin" component = {SignIn} />
                <Route path="/signup" component = {SignUp} />
                {/* <Route path="/services" component = {Services} /> */}
            </React.Fragment>
        )
    }
}
