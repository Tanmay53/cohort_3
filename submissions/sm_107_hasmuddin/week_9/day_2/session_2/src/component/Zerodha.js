import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Product from "./Product/Product";
import Pricing from "./Pricing/Pricing";

export default function Zerodha() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Product />
      <Pricing />
    </div>
  );
}
