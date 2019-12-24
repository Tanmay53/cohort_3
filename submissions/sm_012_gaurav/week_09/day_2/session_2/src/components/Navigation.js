/* eslint-disable no-useless-constructor */
import React from 'react';
import {Route, Link} from 'react-router-dom';
import Content from './Content';
import Contact from './Contact';
import About from './About';
import Product from './Product';
import Login from './Login';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className = "container-fluid shadow-sm py-1 sticky-top bg-white">
                    <div className = "container mx-auto">
                        <div className = "row justify-content-between">
                            <div className = "col-6 mt-1">
                                <Link to = '/'><img src = 'logo.svg' alt = "zerodha logo" height = {"50"} width = {"125"}></img></Link>
                            </div>
                            <div className = "col-5 text-right text-muted">
                                <div className = "row d-flex justify-content-between align-items-center">
                                    <p className = "mt-3"><Link to = "/about">About</Link></p>
                                    <p className = "mt-3"><Link to = "/products">Products</Link></p>
                                    <p className = "mt-3 text-decoration-none"><Link to = "/contact">Contact</Link></p>
                                    <Link to = "/login"><button className = "btn btn-primary btn-sm px-4 text-small">Login</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path = "/" exact render = {() => <Content />} />
                <Route path = "/contact" render = {() => <Contact />} />
                <Route path = "/about" render = {() => <About />} />
                <Route path = "/products" render = {() => <Product />} />
                <Route path = "/login" render = {() => <Login />} />
            </>
        )
    }
}

export default Navigation;