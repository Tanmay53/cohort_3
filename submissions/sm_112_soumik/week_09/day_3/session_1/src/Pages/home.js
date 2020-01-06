import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Products from "./allProducts";

const Home = props => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-center">This is my home page</h2>
      <p className="lead">View products and also add them to cart.</p>
    </div>
  );
};

export default Home;
