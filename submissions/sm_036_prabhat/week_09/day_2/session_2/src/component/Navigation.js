import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import Login from './Login'


export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid sticky-top bg-white">
                    <div className="container p-3">
                        <div className="d-flex justify-content-between">
                            <div>
                                <Link to="/"><img src="https://zerodha.com/static/images/logo.svg" height="20px" width="130px" alt="" /></Link>
                            </div>
                            <div>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link className="text-dark" to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="text-dark" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="text-dark" to="/services">Services</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="text-dark" to="/login">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>

                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/About" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/login" component={Login} />

            </React.Fragment>
        )
    }
}