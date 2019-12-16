import React from "react";
import "./App.css";
import OsList from "./components/OsList";
import MobileList from "./components/MobileList";
import Button from "./components/Button";
import Card from "./components/Card";

var osListData = {
  header: "Mobile Operating System",
  item1: "Android",
  item2: "Blackberry",
  item3: "iPhone",
  item4: "Windows Phone"
};

var mobileListData = {
  header: "Mobile Manufacturers",
  item1: "Samsung",
  item2: "HTC",
  item3: "Micromax",
  item4: "Apple"
};

var personData = {
  name: "Ricky Park",
  location: "NEW YORK",
  description: "User interface designer and front-end developer",
  skills: [
    "UI/UX",
    "Front End Development",
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Node"
  ]
};

class App extends React.Component {
  render() {
    return (
      <div>
        <OsList data={osListData} />

        <MobileList data={mobileListData} />

        <div className="container mt-5">
          <div className="d-flex m-3">
            <Button label="JOIN US" color="blue" />
            <Button label="SETTINGS" color="red" />
          </div>

          <div className="d-flex m-3">
            <Button label="LOGIN" color="green" />
            <Button label="CONTACT US" color="pink" />
          </div>

          <div className="d-flex m-3">
            <Button label="SEARCH" color="yellow" />
            <Button label="HELP" color="magenta" />
          </div>

          <div className="d-flex m-3">
            <Button label="HOME" color="grey" />
            <Button label="DOWNLOAD" color="purple" />
          </div>
        </div>

        <Card data={personData} />
      </div>
    );
  }
}

export default App;
