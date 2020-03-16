import React from 'react';
import { Link } from 'react-router-dom'
import NavProducts from './NavProducts'

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment >
                <div className="d-flex flex-wrap justify-content-around m-3"
                    style={{ fontFamily: "ProximaNova Regular" }} >
                    <div>
                        <Link className="mx-2" to="/" >
                            <img src="./zeb-logo.png" alt="zeb-logo.png" />
                        </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between" >
                        <img src="./android.png" alt="android.png" className="mx-2" />
                        <img src="./ios.png" alt="ios.png" className="mx-2" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between" >
                        {/* <Link className="mx-2" to="/products">Products2</Link> */}
                        <NavProducts />
                        <br />
                        <Link className="mx-2" to="/aboutUs" > About Us </Link>
                        <br />
                        <Link className="mx-2" to="/signIn" > Sign In </Link>
                        <br />
                        <Link className="mx-2 border p-1 px-2 rounded-pill" to="/signUp" > Sign Up </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Navbar