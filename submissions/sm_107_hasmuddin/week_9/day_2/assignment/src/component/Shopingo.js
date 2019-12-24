import React from "react";
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
import Faqjoiner from "./Faq/Faqjoiner";
import Signup from "./Signup/Signup";
import Cart from "./Cart/Cart";
export default function Shopingo() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Product />
      <Contact />
      <Signup />
      <Faqjoiner />
      <Cart />
      <Mens />
      <Womens />
      <Kids />
      <Technology />
      <Bottom />
    </div>
  );
}
