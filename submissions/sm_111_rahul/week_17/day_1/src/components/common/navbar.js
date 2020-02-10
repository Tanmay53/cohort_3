/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
     constructor(props){
         super(props);
         this.state={
             isAuthenticated: false
         }
     }
    
   

  render() {
     
    return (
      <div>
        <Link to="/" className="btn btn-warning m-3">
          Home
        </Link>
        <Link to="/orders" className="btn btn-warning float-right m-3">
          Orders
        </Link>


        <Link to="/login" className="btn btn-warning float-right m-3">
          Login
        </Link>
    
      </div>
    );
  }
}

export default Navbar;
