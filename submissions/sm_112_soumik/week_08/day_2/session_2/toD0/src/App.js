import React from "react";
import List from "./Component/list";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      os: ["Andoird", "Blackberry", "Iphone", "Windows Phone"],
      manufacturers: ["Samsung", "HTC", "Micromax", "Apple"]
    };
  }
  render() {
    return (
      <div>
        <h1>Mobile Operating System</h1>
        {this.state.os.map(item => {
          return <List key={item} l1={item} />;
        })}
        <h1>Mobile Manufacturers</h1>
        {this.state.manufacturers.map(item => (
          <List key={item} l1={item} />
        ))}
      </div>
    );
  }
}

export default App;
