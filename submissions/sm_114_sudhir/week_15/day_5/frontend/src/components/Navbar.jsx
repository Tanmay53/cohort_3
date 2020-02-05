import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-white">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/users/listing" className="nav-link text-white">All Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/users/create" className="nav-link text-white">Create User</Link>
            </li>
          </ul>
          
        </div>
      </nav>
    )
  }
}
