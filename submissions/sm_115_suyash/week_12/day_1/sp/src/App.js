import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Cart from "./Components/Product/Cart";
import Slack from "./Components/Slack/Slack";

function App() {
  return (
    <div>
      <Login />
      <Cart />
      <Slack />
    </div>
  );
}

export default App;
