import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class NotFound extends Component {
    render() {
        return (
            <div className="conatiner m-auto">
                <h1 className="text-center">404-Page not found</h1>
                <Link>Back to home Page</Link>
            </div>
        )
    }
}

export default NotFound
