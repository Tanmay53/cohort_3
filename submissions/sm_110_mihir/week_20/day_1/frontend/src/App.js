import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
function App(props) {
  return (
    <div className="App">
      <Home {...props} />
    </div>
  );
}

export default App;
