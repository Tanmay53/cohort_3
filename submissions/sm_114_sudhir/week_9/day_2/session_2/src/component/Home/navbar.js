import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col">
                            <nav className="mb-1 navbar navbar-expand-lg bg-white text-primary">
                                <Link to="/" className="navbar-brand" href="">
                                    <img src="https://www.zebpay.com/img/layout/zeb-logo.png?id=3f5d40b5a0a5d27a3a27" alt="logo" />
                                </Link>
                                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                                    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */}
                                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item dropdown">
                                            <Link to="/product">
                                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">Products </a>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                                                    <a className="dropdown-item" href="#">Exchange</a>
                                                    <a className="dropdown-item" href="#">Wallet</a>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about">
                                                <a className="nav-link" href="#">About Us</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/signin">
                                                <a className="nav-link" href="#">Sign In</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/signup">
                                                <button className="btn text-muted shadow-sm bg-white" style={{width:'100px', height:'50px', borderRadius:'30px'}}>Sign Up</button>
                                            </Link> 
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
