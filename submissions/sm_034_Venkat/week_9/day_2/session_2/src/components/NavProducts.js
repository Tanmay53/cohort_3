import React from "react";
import { Link } from 'react-router-dom'
import './NavProducts.css'

function NavProducts() {
    return (
        <div className="dropdown">
            <button className="dropbtn">Products</button>
            <div className="dropdown-content">
                <Link className="mx-1 d-flex" to="/pExchange" >
                    <img src="./nav-picExchange.png" alt="pic.png" />
                    <div className="ml-3">
                        <span className="h5">Exchange</span>
                        <br />
                        <span className="text-muted">Crypto Trading Platform</span>
                    </div>
                </Link>
                <Link className="mx-1 d-flex" to="/wallet" >
                    <img src="./nav-wallet.png" alt="pic.png" />
                    <div className="ml-3">
                        <span className="h5">Wallet</span>
                        <br />
                        <span className="text-muted">Send/Receive Crypto Securely</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavProducts