import React from 'react'
import Authentication from '../auth/Authentication'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const style = {
        width : "150px"
    }
    return (
        <div className = "container-fluid bg-light">
            <div className = "row py-3">
                <div className = "col-4 col-sm-3 offset-lg-1 ">
                    <Link to="/"><h1>Home</h1></Link>
                </div>
                <div className = "col-12 col-sm-9 col-lg-8 ">
                    <div className = "row d-flex justify-content-end">
                        <div className = "col-12 col-sm-3 col-lg-2">
                            <Link to="/orders"><h1 className = "text-secondary">Orders</h1></Link>
                        </div>
                        <div className = "col-12 mt-2 col-sm-3 col-lg-2 offset-lg-1">
                            <Link to="/login"><button type="button" className="btn btn-primary">Login</button></Link>
                        </div>  
                        <div className = "col-12 mt-2 col-sm-3 col-lg-2 offset-lg-1">
                            <Link to="/logout"><button type="button" className="btn btn-primary">Log Out</button></Link>
                        </div>                                                                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
