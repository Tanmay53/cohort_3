import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    
    render() {
        return (
            <div>
                <ul className="d-flex mr-2" style={{listStyle:"none"}}>
               <li className="mr-2">
                    <Link to="/">Home</Link>
               </li>
               <li className="mr-2">
                    <Link to="/about">About</Link>                  
               </li>
               <li className="mr-2">
                <Link to="/career">Career</Link>
               </li>
               <li className="mr-2">
                <Link to="/register">Register</Link>
               </li>
           </ul>
            </div>
        )
    }
}


