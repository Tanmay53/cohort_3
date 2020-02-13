import React from 'react';
import './App.css';
import Routes from "./routes/route.js"
function App() {
  return (
    <div className=" bg-light">
      <h1 className="display-4 bg-success text-light text-center">Book Meeting Room</h1>
      <Routes />
    </div>
  );
}

export default App;
