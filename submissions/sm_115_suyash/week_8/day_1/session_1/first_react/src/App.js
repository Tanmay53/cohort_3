import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Btn from "./button_component";
import List1 from "./list_component";
import Showcase from "./showcase_component";

function App() {
  return (
    <div>
      <List1 />
      <Btn />
      <Showcase />
    </div>
  );
}

export default App;
