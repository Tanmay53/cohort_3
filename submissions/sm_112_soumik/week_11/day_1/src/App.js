import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/login/login";
import Form from "./Components/login/form";
import Product from "./Components/products/productForm";
import Pvr from "./Components/Web/index";

function App() {
  return (
    <div>
      <Login />
      <Product />
      <Pvr />
    </div>
  );
}

export default App;
