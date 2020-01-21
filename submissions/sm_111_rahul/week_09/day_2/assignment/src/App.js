/** @format */
import Home from "./components/home";
import Faq from "./components/faq";
import Mac from "./components/mac";
import Iphone from "./components/iphone";
import IphoneDesc from "./components/iphoneDesc";
import MacDesc from "./components/macDesc";
import AccessoriesDesc from "./components/accessoriesDesc";
import Accessories from "./components/accessories";
import About from "./components/aboutus";
import Career from "./components/career";
import Cart from "./components/cart";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Notfound from "./components/notFound.js";
import axios from "axios";
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isAuth: false,
      userN: "rahul",
      pass: "qwerty",
      cartItems: []
    };
  }
  componentDidMount() {
    axios.get("myData.json").then(res => {
      const data = res.data;
      this.setState({
        data: data
      });
    });
  }

  checkAuth = (u, p) => {
    console.log(u,p)
    alert(u,p)
    if (u == this.state.userN && p == this.state.pass) {
      this.setState({
        isAuth: true
      },()=>{console.log(this.state.isAuth)});
    }
  };
  updateCart = (item) =>{
    this.setState({
      cartItems : [...this.state.cartItems,item]
    })
  }

  render() {
    return (
      <Router>
        <Navbar />

        <div className="">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route
              path="/iphone"
              exact
              render={props => (
                <Iphone data={this.state.data} {...props}></Iphone>
              )}
            ></Route>
            <Route
              path="/mac"
              exact
              render={props => <Mac data={this.state.data} {...props}></Mac>}
            ></Route>
            <Route
              path="/accessories"
              exact
              render={props => (
                <Accessories data={this.state.data} {...props}></Accessories>
              )}
            ></Route>
            <Route
              path="/iphone/:id"
              render={props => (
                <IphoneDesc data={this.state.data} {...props}></IphoneDesc>
              )}
            ></Route>
            <Route
              path="/mac/:id"
              render={props => (
                <MacDesc data={this.state.data} {...props}></MacDesc>
              )}
            ></Route>
            <Route
              path="/accessories/:id"
              render={props => (
                <AccessoriesDesc
                  data={this.state.data}
                  {...props}
                ></AccessoriesDesc>
              )}
            ></Route>
            <Route path="/cart" render ={props => <Cart updateCart={this.state.updateCart} {...props}/>}></Route>
            <Route path="/career" component={Career}></Route>
            <Route path="/faq" component={Faq}></Route>
            <Route path="/aboutUs" component={About}></Route>
            <Route
              path="/auth"
              render={props => (
                <Login isAuth={this.state.isAuth} auth={this.checkAuth} {...props}/>
              )}
            />
            <Route component={Notfound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
