import React, { Component } from 'react';
import { Link} from "react-router-dom";
class Navbar extends Component {
    
    render() { 
        return ( 
            <nav
          style={{ backgroundColor: "black" }}
          className="navbar navbar-expand-lg"
        >
          <div className="container ">
            <ul className="navbar-nav text-center flex-row">
              <li className="nav-item mx-3 ">
                <Link
                  to="/"
                  className="nav-link bg-light "
                  style={{ margin: "7px", padding: "0px", borderRadius: "50%" }}
                >
                  <img
                    alt="icon"
                    height="27px"
                    width="27px"
                    src="appleicon.png"
                  ></img>
                </Link>
              </li>
              <li className="nav-item mx-3 ">
                <Link className="nav-link text-light" to="/iphone">
                  iPhone
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" to="/mac">
                  Mac
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" to="/accessories">
                  Accessories
                </Link>
              </li>
            </ul>
            <ul className="ml-auto navbar-nav text-center flex-row">
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" to="/auth">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="nav-link bg-light "
                  style={{ margin: "7px", padding: "0px", borderRadius: "10%" }}
                >
                  <img
                    alt="icon"
                    height="27px"
                    width="27px"
                    src="cart.svg"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
         );
    }
}
 
export default Navbar;