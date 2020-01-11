import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";

export default class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item active">
                            <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
            </React.Fragment>
        );
    }
} 