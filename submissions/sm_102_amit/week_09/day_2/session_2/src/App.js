import React from "react";
import { Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Login from "./component/Login";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <div className="container-fluid bg-light">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
