import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from '../Home/Home'
import Surface from '../Surface/Surface'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="px-5 row">
                <div className="col-6">
                <Link className="mr-3 py-2 d-inline-block" to="/" className="">
                    <img className="mr-4" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" width="110px"/>
                </Link>
                <Link className="mr-4 sm-font text-dark py-3 d-inline-block" to="/office">Office</Link>
                <Link className="mr-4 sm-font text-dark py-3 d-inline-block" to="/window">Window</Link>
                <Link className="mr-4 sm-font text-dark py-3 d-inline-block" to="/surface">Surface</Link>
                <Link className="mr-4 sm-font text-dark py-3 d-inline-block" to="/xbox">Xbox</Link>
                <Link className="mr-4 sm-font text-dark py-3 d-inline-block" to="/support">Support</Link>
                </div>
                <div className="col-2"></div>
                <div className="col-3">
                <Link className="py-3 mr-4 sm-font text-dark py-3 d-inline-block " to="">
                    <span>All microsoft </span><i class="mt-1 d-inline-block fas fa-chevron-down"></i>
                </Link>
                <Link>
                    <i class="py-3 mr-4 fas fa-search text-dark "></i>
                </Link>
                <Link>
                    <i class="py-3 mr-4 fas fa-shopping-cart text-dark"></i>
                </Link>
                <Link>
                    <span className="text-dark sm-font mr-1">Login</span><i class="fas fa-sign-in-alt text-dark"></i>
                </Link>
                </div>
                <div>
                    <Route path="/" exact component = {Home} />
                    <Route path="/office" exact component = {Surface} />
                    <Route path="/window" exact Component = {Home} />
                    <Route path="/surface" exact Component = {Home} />
                    <Route path="/xbox" exact Component = {Home} />
                    <Route path="/support" exact Component = {Home} />
                </div>
                </nav>
                
            </div>
        )
    }
}

export default Navbar
