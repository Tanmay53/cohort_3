import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Pages/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
