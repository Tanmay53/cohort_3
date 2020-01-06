import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import SignIn from "./SignIn";

const products = [
  {
    id: "001",
    productName: "Nike Jordan",
    desc: "A new pair of sport shoes",
    price: "6000",
    img:
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/n6emfdrrnssozw6vz6au/air-jordan-1-mid-shoe-BpARGV.jpg"
  },
  {
    id: "002",
    productName: "Puma Shoes",
    desc: "A casual pair of shoes",
    price: "2300",
    img:
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/12/Puma-Active-Gaming-Footwear-hed-796x419.jpg"
  },
  {
    id: "003",
    productName: "Nike Air Max",
    desc: "Classy Shoes",
    price: "4000",
    img:
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/rujd1mapnz3d1pormplg/air-max-97-shoe-qVRbjT.jpg"
  },
  {
    id: "004",
    productName: "Adidas Superstar",
    desc: "A pair of white sneacker",
    price: "3400",
    img:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg"
  },
  {
    id: "005",
    productName: "Fila",
    desc: "Cool pair of shoes",
    price: "2000",
    img:
      "http://www.thepursuitofjoy.ca/images/Mens/Fila-Shoes-Online-Store-Fila-F13-Lite-Casual-Shoes-BlackChredWhite.jpg"
  },
  {
    id: "006",
    productName: "Levi's",
    desc: "Good pair of white shoes",
    price: "2200",
    img:
      "https://rukminim1.flixcart.com/image/714/857/jz30nm80/shoe/x/g/m/38099-1614-9-levi-s-white-original-imafj6f4wmdfwtku.jpeg?q=50"
  }
];

export class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      isAuth: false
    };
  }

  addCart = () => {
    alert("hello");
  };

  loginHandler = () => {
    this.setState({
      isAuth: true
    });
  };

  logoutHandler = () => {
    this.setState({
      isAuth: false
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">The Shoe Store</h2>
        <div>
          <div className="container-fluid">
            <ul className="nav bg-dark text-ligth">
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/signIn">Sign In</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">
                  <Link to="/cart">Cart</Link>
                </a>
              </li>
            </ul>
          </div>

          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  addCart={this.addCart}
                  isAuth={this.state.isAuth}
                  data={this.state.products}
                  logout={this.logoutHandler}
                />
              )}
            />
            <Route
              path="/signIn"
              component={props => (
                <SignIn isAuth={this.state.isAuth} submit={this.loginHandler} />
              )}
            />
            <Route
              path="/cart"
              component={() => <Cart isAuth={this.state.isAuth} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Routes;
