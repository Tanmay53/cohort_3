import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
