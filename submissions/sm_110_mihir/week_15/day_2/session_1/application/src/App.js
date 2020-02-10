import React from "react";
import "./App.css";
import Routes from "./Components/Routes";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <h1 className="bg-primary p-3 mb-3">Full stack Grocery</h1>
        </div>
        <Routes />
      </header>
    </div>
  );
}

export default App;
