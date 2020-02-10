import React, { Component } from 'react'
import { Route, Link, BrowserRouter }from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Login from './Login'
export default class Header extends Component {
    render() {
        const style = {
            width : "150px"
        }
        return (
            <React.Fragment>
                    <div className = "container-fluid bg-light">
                        <div className = "row py-3">
                            <div className = "col-4 col-sm-3 offset-lg-1 ">
                                <Link to="/"><img style = {style} src = "/zerodhaLogo.svg" /></Link>
                            </div>
                            <div className = "col-12 col-sm-9 col-lg-8 ">
                                <div className = "row">
                                    <div className = "col-12 col-sm-3 col-lg-2">
                                        <Link to="/about"><h4 className = "text-secondary">About</h4></Link>
                                    </div>
                                    <div className = "col-12 col-sm-3 col-lg-2">
                                        <Link to="/contact"><h4 className = "text-secondary">Contact</h4></Link>
                                    </div>
                                    <div className = "col-12 col-sm-3 col-lg-2">
                                        <Link to="/services"><h4 className = "text-secondary">Services</h4></Link>
                                    </div>
                                    <div className = "col-12 col-sm-3 col-lg-2 offset-lg-1">
                                        <Link to="/login"><button type="button" className="btn btn-primary">Login</button></Link>
                                    </div>                                                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <Route path = "/" exact component={Home} />                
                    <Route path = "/about" component={About} />                
                    <Route path = "/contact" component={Contact} />                
                    <Route path = "/services" component={Services} />                
                    <Route path = "/login" component={Login} />                
            </React.Fragment>
        )
    }
}
