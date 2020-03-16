


import React from "react";
import StopWatch from "./Components/StopWatch";
import Timer from "./Components/Timer";
import "./Components/style.css"
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatch: true,
      timer: false
    };
  }
  display = () => {
    if (this.state.stopwatch) return <StopWatch />;
    else return <Timer />;
  };
  handleStopWatch = () => {
    console.log("stopwatch clicked");
    this.setState({
      stopwatch: true,
      timer: false
    });
    this.display();
  };

  handleTimer = () => {
    this.setState({
      timer: true,
      stopwatch: false
    });
    this.display();
  };

  render() {
    return (
      <div>
        <div className="container watch">
          <div className="row">
            <div className=" col bg-secondary">
              <center className="border border-success p-4">
              <button className="p-2 m-2" onClick={this.handleStopWatch}>StopWatch</button>
              <button className="p-2 m-2" onClick={this.handleTimer}>Timer</button>
              {this.display()}
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
