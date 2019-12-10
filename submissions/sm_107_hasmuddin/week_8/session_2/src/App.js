import React from "react";
import "./App.css";
import Mobile from "./mobile";
import Buttons from "./buttons";
import Card from "./card";

function App() {
  return (
    <div className="flex-d">
      <div>
        <Mobile />
        <Buttons />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
