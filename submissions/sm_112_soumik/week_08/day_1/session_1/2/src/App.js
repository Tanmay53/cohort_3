import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Info from "./components/Info";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div className="App border shadow-lg p-3 mb-5 rounded" id="card">
      <div className="col-md-8 offset-2"></div>
      <Header />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
