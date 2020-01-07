import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import SignIn from "./SignIn";
import Product from "./Product";

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
let name = "";
let pass = "";

export class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      isAuth: false,
      addCart: [],
      name: "",
      pass: ""
    };
  }

  addCart = obj => {
    let cart = [...this.state.addCart, obj];
    this.setState({ ...this.state, addCart: cart });
  };

  loginHandler = user => {
    if (name.length < 5 && pass.length < 4) {
      alert("Enter a valid username and password");
    } else {
      this.setState({
        isAuth: true
      });
    }
  };

  handleChange = obj => {
    name = obj.name;
    pass = obj.pass;
  };

  logoutHandler = () => {
    this.setState({
      isAuth: false
    });
  };

  componentNotfound = () => {
    return <h2>Error:404 Page not found</h2>;
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <div className="container">
            <a className="navbar-brand">
              <Link to="/">
                <img
                  className="nav-img"
                  src="https://www.brandcrowd.com/gallery/brands/pictures/picture14828756328430.png"
                />
              </Link>
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-2">
                  <Link className="nav-link lead" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item lead mx-2">
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item lead mx-2">
                  <Link className="nav-link" to="">
                    About
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link btn btn-success" to="/signIn">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link btn btn-danger" to="">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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
              <SignIn
                isAuth={this.state.isAuth}
                submit={this.loginHandler}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route
            path="/cart"
            component={props => (
              <Cart
                cart={this.state.cart}
                isAuth={this.state.isAuth}
                cartData={this.state.addCart}
                {...props}
              />
            )}
          />

          <Route
            path="/:id"
            component={props => (
              <Product
                addCart={this.addCart}
                data={this.state.products}
                isAuth={this.state.isAuth}
                {...props}
              />
            )}
          />
          <Route render={this.componentNotfound} />
        </Switch>
      </>
    );
  }
}

export default Routes;
