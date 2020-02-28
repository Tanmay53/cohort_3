import React, { Component } from 'react'
import Home from '../Components/Home'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    render() {
        return (
            <div>
                <Home />
                <Link to ="/login">asfd</Link>
                succefully logout
            </div>
        )
    }
}
