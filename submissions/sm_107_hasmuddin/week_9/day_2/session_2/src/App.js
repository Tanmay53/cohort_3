import React from "react";
import "./App.css";
import Zerodha from "./component/Zerodha";
import { Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Zerodha />
    </BrowserRouter>
  );
}

export default App;
