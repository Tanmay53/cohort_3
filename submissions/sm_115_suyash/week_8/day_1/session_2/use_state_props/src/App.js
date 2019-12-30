import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import Btn from "./components/button";
import Showcase from "./components/showcase";

const data = {
  class: [
    "btn-primary text-white py-2 w-100 mb-3 rounded-pill",
    "btn-warning text-white py-2 w-100 mb-3 rounded-pill",
    "btn-success text-white py-2 w-100 mb-3 rounded-pill",
    "btn-danger text-white py-2 w-100 mb-3 rounded-pill",
    "btn-info text-white py-2 w-100 mb-3 rounded-pill",
    "btn-secondary text-white py-2 w-100 mb-3 rounded-pill",
    "btn-primary text-white py-2 w-100 mb-3 rounded-pill",
    "btn-dark text-white py-2 w-100 mb-3 rounded-pill"
  ],
  text: [
    "JOIN US",
    "LOGIN",
    "SEARCH",
    "HOME",
    "SETTINGS",
    "CONTACT US",
    "HELP",
    "DOWNLOAD"
  ]
};
const showCaseData = {
  name: "Ricky Park",
  location: "NEW YORK",
  description: "User interface designer and  front-end developer",
  skillArr: [
    "UI/UX",
    "Front End Development",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node"
  ]
};
function App() {
  return (
    <div>
      <List />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            {data.class.map((val, index) => {
              if (index < 4) {
                return <Btn classItem={val} text={data.text[index]} />;
              }
            })}
          </div>
          <div className="col-3">
            {data.class.map((val, index) => {
              if (index > 3) {
                return <Btn classItem={val} text={data.text[index]} />;
              }
            })}
          </div>
        </div>
      </div>
      <Showcase
        name={showCaseData.name}
        loc={showCaseData.location}
        des={showCaseData.description}
        skill={showCaseData.skillArr}
      />
    </div>
  );
}

export default App;
