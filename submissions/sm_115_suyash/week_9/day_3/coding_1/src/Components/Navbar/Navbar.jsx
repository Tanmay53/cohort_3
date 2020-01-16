import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "./Navbar.css";
import Home from "../Home/Home";
import Surface from "../Surface/Surface";
import SignUp from "../LoginPage/SignUp";
import Xbox from "../Xbox/Xbox";
import Support from "../Support/Support";
import Office from "../Office/Office";
import Window from "../Window/Window";
import AllSolution from "../AllSolution/AllSolution";
import ShopNow from "../ShopNow/ShopNow";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartList: [],
      toggle: false,
      productArr: [
        {
          name: "Mackbook Air",
          id: 1,
          price: "70,000",
          img:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },

        {
          name: "Mackbook Air Pro",
          id: 2,
          price: "1,70,000",
          img:
            "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },

        {
          name: "Mackbook",
          id: 3,
          price: "55,000",
          img:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },

        {
          name: "Mack Pro 16",
          id: 4,
          price: "1,70,000",
          img:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },

        {
          name: "Mackbook Pro",
          id: 5,
          price: "65,000",
          img:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },

        {
          name: "Thinkpad 470",
          id: 6,
          price: "54,000",
          img:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },

        {
          name: "Thinkpad 490",
          id: 7,
          price: "1,15,000",
          img:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
      ]
    };
  }

  addCart = val => {
    alert("hdsdfh");
    let list = [...this.state.cartList, val];
    this.setState({
      cartList: list
    });
  };

  changeToggle = e => {
    e.preventDefault();
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    console.log("Class comp>>>>>>>>>>>>>", this.props);
    return (
      <div className="container-fluid">
        <nav className="px-5 row">
          <div className="col-6">
            <Link className="mr-3 py-2 d-inline-block" to="/" className="">
              <img
                src="cslogo2.png"
                alt=""
                className="mr-0 pr-0 mr-4"
                width="110px"
                height="50px"
              />
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/office"
            >
              Office
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/window"
            >
              Window
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/surface"
            >
              Produts
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/xbox"
            >
              Xbox
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/support"
            >
              Support
            </Link>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <Link
              className="py-3 ml-5 mr-4 sm-font text-dark py-3 d-inline-block "
              to="/allsolution"
            >
              <span>All Solution </span>
              <i className="mt-1 d-inline-block fas fa-chevron-down"></i>
            </Link>
            <Link to="">
              <i className="py-3 mr-4 fas fa-search text-dark "></i>
            </Link>
            <Link to="/shopnow">
              <i className="py-3 mr-4 fas fa-shopping-cart text-dark"></i>
            </Link>
            <Link to="/signup">
              <span className="text-dark sm-font mr-1">Login</span>
              <i className="fas fa-sign-in-alt text-dark"></i>
            </Link>
          </div>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/office" component={Office} />
            <Route path="/window" component={Window} />
            <Route
              exact
              path="/surface"
              render={props => (
                <Surface
                  {...props}
                  productArr={this.state.productArr}
                  clicked={this.addCart}
                />
              )}
            />
            <Route path="/xbox" component={Xbox} />
            <Route path="/support" component={Support} />
            <Route path="/allsolution" component={AllSolution} />
            <Route path="/shopnow" component={ShopNow} />
            <Route
              path="/signup"
              component={props => (
                <SignUp
                  toggle={this.state.toggle}
                  clicked={e => this.changeToggle(e)}
                />
              )}
            />
            <Route
              path="/surface/:id"
              component={props => (
                <ShopNow {...props} cartList={this.state.cartList} />
              )}
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
