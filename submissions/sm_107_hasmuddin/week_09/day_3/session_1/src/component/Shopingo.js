import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Product from "./Product/Product";
import Contact from "./Contact/Contact";
import Bottom from "./Bottom";
import Mens from "./Product/Mens";
import Womens from "./Product/Womens";
import Kids from "./Product/Kids";
import Technology from "./Product/Technology";
import Faq from "./Faq/Faq";
import Signup from "./Signup/Signup";
import Cart from "./Cart/Cart";
import Category from "./Product/Category/Category";
import SubCategory from "./Product/Category/SubCategory";
import Items from "./Product/Category/Items";
import ItemsInfo from "./Product/Category/ItemsInfo";

const notFound = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-8">
        <img
          className="img-fluid"
          src="https://www.originstorage.com/wp-content/uploads/2018/10/404Error.jpg"
        />
      </div>
    </div>
  );
};

export default function Shopingo(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
        <Route path="/faq" component={Faq} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/category" exact component={Category} />
        <Route path="/product/category/:subcat" exact component={SubCategory} />
        <Route
          path="/product/category/:subcat/:items"
          exact
          component={Items}
        />
        <Route
          path="/product/category/:subcat/:items/:id"
          exact
          component={ItemsInfo}
        />
        <Route path="/product" exact component={Product} />
        <Route path="/product/mens" component={Mens} />
        <Route path="/product/women" component={Womens} />
        <Route path="/product/kids" component={Kids} />
        <Route path="/product/technology" component={Technology} />
        <Route component={notFound} />
      </Switch>
      <Bottom />
    </BrowserRouter>
  );
}
