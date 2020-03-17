import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg text-white bg-dark">
                <Link to='/' className='text-white'><div className="navbar-brand" >Music Album Records</div></Link>
                    <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-4">
                                <Link to='/' className='text-white'>Home</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link to='/addentry' className='text-white'>Add Entry</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link to='/login' className='text-white'>Login</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link to='/register' className='text-white'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar