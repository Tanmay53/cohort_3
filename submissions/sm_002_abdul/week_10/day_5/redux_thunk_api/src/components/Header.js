import React from "react"
import {Link} from "react-router-dom"

class Header extends React.Component{
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Redux Thunk</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/registration" className="nav-link">Registration <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
} 

export default Header