import React from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component {
    render(){
        return (
            <div className='container mb-0'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
                    <Link className="navbar-brand" to='/users/listing'>UserForm</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/users/create'>Add Item</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
