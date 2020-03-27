import React from "react";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Private from "./components/Private";

function App() {
  return (
    <>
      <Private path="/">
        <Dashboard></Dashboard>
      </Private>
    </>
  );
}

export default App;
