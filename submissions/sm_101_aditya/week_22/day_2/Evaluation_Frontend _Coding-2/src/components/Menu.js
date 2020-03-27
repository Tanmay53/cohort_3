import React, { Component } from 'react'

import { Link } from 'react-router-dom'


export class Menu extends Component {
    render() {
        return (
            <div>
                <ul class="nav nav-pills nav-fill bg-info p-2 m-2">
                    <li class="nav-item">
                        <h1 className="text-warning border border-secondary p-2">Countries City List</h1>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to ="Login" className="text-white">Login</Link>
                    </li>
                    <li className="nav-item ml-4">
                    <Link to ="Signup" className="text-white">Signup</Link>
                    </li>
                    <li className="nav-item ml-4">
                    <Link to ="Home" className="text-white">Home</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;
