import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Brag from "./Brag";
import Motto from "./Motto";
import AboutUs from "./AboutUs"
import Footer from "./Footer";

class Uber extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Card />
        <Brag />
        <Motto />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}
export default Uber;
