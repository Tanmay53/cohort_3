import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Os from "./os";
import Manufacture from "./manufacture";
import Button2 from "./button2";
import Button3 from "./button3";
import Button4 from "./button4";
import Button5 from "./button5";
import Button6 from "./button6";
import Button7 from "./button7";
import Card from "./card";

function App() {
  return (
    <div>
      <div className="flex-d">
        <div>
          <Os />;
          <Manufacture />
        </div>
        <Card />
      </div>

      <div className="flex-d">
        <div>
          <Button2 />
          <Button3 />
          <Button4 />
        </div>
        <div>
          <Button5 />
          <Button6 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

export default App;
