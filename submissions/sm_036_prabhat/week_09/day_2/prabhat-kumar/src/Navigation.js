import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"
import './App.css'
import About from './component/About';
import Categories from './component/Categories';
import Contact from './component/Contact';
import Faq from './component/Faq'

export default class Navigation extends Component {
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

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/categories" component={Categories} />
                <Route path="/contact" component={Contact} />
                <Route path="/faq" component={Faq} />
            </React.Fragment>
        )
    }
}


const Home = () => {
    return (
        <div>
            <h1 className="text-center display-3">This is home Page</h1>
        </div>
    )
}