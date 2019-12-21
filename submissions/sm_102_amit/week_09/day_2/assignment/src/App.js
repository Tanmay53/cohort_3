import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import Home from "./component/Home";
import About from "./component/pages/About";
import Product from "./component/pages/Product";
import Faq from "./component/pages/Faq";
import Contact from "./component/pages/Contact";
import Login from "./component/pages/Login";

import "./App.css";
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" exact render={() => <Product />} />
        <Route path="/product/men" render={() => <Product name="men" />} />
        <Route path="/product/women" render={() => <Product name="women" />} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />

        <div className="container-fluid border-top">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
