import React from 'react';
import List from "./components/Rj14"
import Button from './components/Rj15';
import "./components/Rj15.css"
import Rj13 from "./components/Rj16"

const data = [
  {
    content: "JOIN US",
    color: "#429bce"
  },
  {
    content: "SETTINGS",
    color: "#7aa0b5"
  },
  {
    content: "LOGIN",
    color: "#ed8b23"
  },
  {
    content: "CONTACT US",
    color: "#e14b2e"
  },
  {
    content: "SEARCH",
    color: "#72a540"
  },
  {
    content: "HELP",
    color: "#5f5d9e"
  },
  {
    content: "HOME",
    color: "#de5883"
  },
  {
    content: "DOWNLOAD",
    color: "#bca148"
  }
]
var person = {
  name: "Surya khandavilli",
  location: "Bangalore",
  descriptiom: "Full Stack Developer",
  skills: ["UI/UX", "Front End Developers", "HTML", "CSS", "JAVASCRIPT", "React", "Node"],
  image: "https://avatars1.githubusercontent.com/u/53596943?s=460&v=4"
}
function App() {
  return (
    <div>
      <List header={"Mobile Operating System"} item={["Andoird", "Blackberry", "iPhone", "Windows phone"]} />
      <List header={"Mobile Manufacturers"} item={["Samsung", "HTC", "Micromax", "Apple"]} />
      <div className="grid">
        {data.map(items => <Button label={items.content} color={items.color} />)}
      </div>
      <Rj13 image={person.image} name={person.name} location={person.location} description={person.descriptiom} skills={person.skills.map(ele => <div> {ele}</div>)} />
    </div>
  );
}

export default App;
