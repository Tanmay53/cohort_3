import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom"
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Faq from './components/Faq';
import ProductItem from './components/ProductItem/Product';


export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid bg-dark sticky-top">
                    <div className="container">
                        <div className="d-flex justify-content-between py-2">
                            <Link to="/"><div className="head-font text-white">Shopping<img src="https://img.icons8.com/bubbles/60/000000/add-shopping-cart.png" alt="apple"></img> </div></Link>
                            <div>
                                <ul className="nav text-white p-4">
                                    <li className="nav-item ml-5">
                                        <Link className="text-white" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="text-white" to="/categories">Categories</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="text-white" to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="text-white" to="/faq">FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/about" component = {About} />
                    <Route path = "/categories/:type" render = {(props) => <ProductItem  {...props} />} />
                    <Route path = "/categories" render = {(props) => <Categories {...props}/>} />
                    <Route path = "/contact" component = {Contact} />
                    <Route path = "/faq" component = {Faq} />
                </Switch>
            </React.Fragment>
        )
    }
}
