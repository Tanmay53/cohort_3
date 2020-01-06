import React from "react";
import Home from "./Pages/home";
import { Link, Switch, Route } from "react-router-dom";
import Products from "./Pages/allProducts";
import Product from "./Pages/product";

import "./App.css";

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "001",
          item_name: "watch",
          Brand: "Fossils",
          price: "RS 4000",
          color: "Black",
          img: "https://placeimg.com/200/200/tech"
        },
        {
          id: "002",
          item_name: "Tshirt",
          Brand: "Nike",
          price: "RS 1200",
          color: "White",
          img: "https://placeimg.com/200/200/tech"
        },
        {
          id: "003",
          item_name: "Shoes",
          Brand: "Nike",
          price: "RS 7000",
          color: "Black",
          img: "https://placeimg.com/200/200/tech"
        },
        {
          id: "004",
          item_name: "Bat",
          Brand: "SF",
          price: "RS 900",
          color: "none",
          img: "https://placeimg.com/200/200/tech"
        },
        {
          id: "005",
          item_name: "Phone",
          Brand: "Samsung",
          price: "RS 27000",
          color: "Aura White",
          img: "https://placeimg.com/200/200/tech"
        },
        {
          id: "006",
          item_name: "Laptop",
          Brand: "Apple",
          price: "RS 58,000",
          color: "White",
          img: "https://placeimg.com/200/200/tech"
        }
      ]
    };
  }

  NotFound = () => <h2>404: data not found</h2>;

  render(props) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <Link to="/products">Products</Link>
            </li>
          </ol>
        </nav>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            path="/products/"
            component={props => (
              <Products {...props} data={this.state.products} />
            )}
          />
          <Route
            path="/product/:id"
            render={props => <Product {...props} data={this.state.products} />}
          />
          <Route component={this.NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Shopping;
