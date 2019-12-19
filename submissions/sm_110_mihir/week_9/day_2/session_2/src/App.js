import React, { Component } from "react";
import Nav from "./Components/Navbar";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
export class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
            </React.Fragment>
        );
    }
}

export default App;
