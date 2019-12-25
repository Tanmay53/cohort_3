import React from "react";
import "./App.css";
import Shopingo from "./component/Shopingo";
import { Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Shopingo />
    </BrowserRouter>
  );
}

export default App;
