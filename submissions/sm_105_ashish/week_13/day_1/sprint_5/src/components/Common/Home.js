import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="text-success">WELCOME TO CUSTOMER PAGE! </h1>
                <Link to="/dashboard" className="btn btn-danger m-2">Dashboard</Link>
            </div>
        )
    }
}
