import React from "react";
import Mobile from "./component/Mobile";
import Buttons from "./component/Buttons";
import Profile from "./component/Profile";

function App() {
  const data = [
    {
      heading: "Mobile Operating System",
      name: ["Android", "Blackberry", "iPhone", "Windows Phone"]
    },
    {
      heading: "Mobile Manufacturers",
      name: ["Samsung", "HTC", "Micromax", "Apple"]
    }
  ];
  const buttons = [
    "JOIN",
    "SETTING",
    "LOGIN",
    "CONTACT",
    "SEARCH",
    "HELP",
    "HOME",
    "DOWNLOAD"
  ];
  const profile = {
    image:
      "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png",
    name: "Amit Kumar Singh",
    location: "Patna",
    bio: "User interface designer and front-end developer.",
    buttons: ["Message", "Following"],
    skills: [
      "UI/UX",
      "Front End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js"
    ]
  };
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <Mobile data={data} />
          </div>
        </div>
        <div className="col-md-5">
          <div className="row">
            <Buttons data={buttons} />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <Profile data={profile} />
      </div>
    </div>
  );
}

export default App;
