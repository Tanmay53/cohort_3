import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Footer />
      </>
    );
  }
}

export default App;
