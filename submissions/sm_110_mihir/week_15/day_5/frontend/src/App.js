import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Components/Router";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User CRUD</h1>
      </header>
      <Router />
    </div>
  );
}

export default App;
