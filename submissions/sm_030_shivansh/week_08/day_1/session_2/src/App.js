import React from 'react';
import './App.css';
import Mobile from './component/Mobile';
import Button from "./component/Button"
import Card from './component/Card'

const personProfile = {
  name: "Ricky Park",
  city: "New York",
  about: "User interface designer and front-end developer",
  btn_label: ["Message", "Following"],
  skill: ["UI/UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"]

}
class App extends React.Component {
  mobileOS = {
    heading: "Mobile Operating System",
    type: ["Android", "BlackBerry", "iPhone", "Windows Phone"]
  }

  manufacturer = {
    heading: "Mobile Manufacture",
    type: ["Samsung", "HTC", "Micromax", "Apple"],
  }

  button = {
    label: ["JOIN US", "SETTINGS", "LOGIN", "CONTACT US", "SEARCH", "HELP", "HOME", "DOWNLOAD"],

  }
  render() {
    return (
      <div >
        {/*Mobile OS */}
        <Mobile heading={this.mobileOS.heading}
          item1={this.mobileOS.type[0]} item2={this.mobileOS.type[1]}
          item3={this.mobileOS.type[2]} item4={this.mobileOS.type[3]} />

        {/*Mobile Manufacture*/}
        <Mobile heading={this.manufacturer.heading}
          item1={this.manufacturer.type[0]} item2={this.manufacturer.type[1]}
          item3={this.manufacturer.type[2]} item4={this.manufacturer.type[3]} />

        {/*Button */}
        <div className="d-flex">
          <Button label={this.button.label[0]} color="blue" />
          <Button label={this.button.label[1]} color="red" />
        </div>

        <div className="d-flex m-3">
          <Button label={this.button.label[2]} color="lightgreen" />
          <Button label={this.button.label[3]} color="green" />
        </div>

        <div className="d-flex">
          <Button label={this.button.label[4]} color="purple"></Button>
          <Button label={this.button.label[5]}></Button>
        </div>

        <div className="d-flex">
          <Button label={this.button.label[6]} color="pink"></Button>
          <Button label={this.button.label[7]} color="yellow"></Button>
        </div>

        {/*Card  */}
        <div>
          <Card data={personProfile} />
        </div>
      </div>
    );
  }
}

export default App;
