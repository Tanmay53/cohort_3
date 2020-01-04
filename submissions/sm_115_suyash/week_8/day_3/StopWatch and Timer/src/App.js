import React from "react";
import "./App.css";
import Stopwatch from "./Components/Stopwatch";
import Timer from "./Components/Timer";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Stopwatch className="col" />
        <Timer className="col" />
      </div>
    </div>
  );
}

export default App;
