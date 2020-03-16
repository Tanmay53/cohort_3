import React from 'react'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import Typography from '@material-ui/core/Typography';
const Header = () => {
    const styles = {
        height : "50px"
    }
    return (
        <React.Fragment>
            <div className = "container-fluid bg-light ">
                <div className = "row d-flex justify-content-between mx-2">
                    <div className = "col align-self-center">
                        <div className = "d-flex justify-content-start">
                            <div className = "p-3">
                                <Link to="/mens" ><h1>Mens</h1></Link>
                            </div>
                            <div className = "p-3">
                                <Link to="/womens" ><h1>Womens</h1></Link>
                            </div>
                        </div>
                    </div>
                    <div className = "col align-self-center">
                        <div className = "d-flex justify-content-center">
                            <Link exact to = "/" >
                                <h1 className = "display-4">THE HANGER</h1>
                            </Link>
                        </div> 
                    </div>
                    <div className = "col align-self-center">
                        <div className = "d-flex justify-content-end">
                            <div className = "p-3">
                                <Link to="/about" ><h1>About Us</h1></Link>
                            </div>
                            <div className = "p-3">
                                <Link to="/cart" >
                                    <ShoppingCartIcon style = {{height : "50px"}} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
