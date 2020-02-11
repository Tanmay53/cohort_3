import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div className = "container text-center mt-4 bg-secondary">
                <h1 className = "text-white">Dashboard</h1>
                <Link to = "/"><button className = "btn-primary p-1 mr-2 mb-2">Go to Home</button></Link>
                <Link to = "/login"><button className = "btn-primary p-1 mr-2">Login</button></Link>
                <Link to = "/signup"><button className = "btn-primary p-1 mr-2">Sign-up</button></Link>
            </div>
        )
    }
}
