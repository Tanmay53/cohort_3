import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className="App">
      <h2>Mobile Operating System.</h2>
      <List1 />
      <h2>Mobile Manufacturers</h2>
      <List2 />
    </div>
  );
}

export default App;
