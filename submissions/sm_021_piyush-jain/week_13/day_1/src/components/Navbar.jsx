import React, { Component } from 'react'
import { Route, Link, BrowserRoute } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </React.Fragment>
        )
    }
}
