import React, { Component } from "react";

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 0,
      sec: 0,
      millisec: 0,
      toggle: false
    };
  }

  startTimer = () => {
    this.x = setInterval(() => {
      this.addSec();
    }, 10);
    this.setState({
      toggle: true
    });
  };

  addSec = () => {
    let count = this.state.millisec;
    let sec = this.state.sec;
    let min = this.state.min;
    if (count === 100) {
      sec++;
      count = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    this.setState({
      min: min,
      sec: sec,
      millisec: count + 1
    });
  };

  stopTimer = () => {
    clearInterval(this.x);
    this.setState({
      toggle: false
    });
  };

  resetTimer = () => {
    clearInterval(this.x);
    this.setState({
      min: 0,
      sec: 0,
      millisec: 0,
      toggle: false
    });
  };
  render() {
    let toggle;
    if (!this.state.toggle) {
      toggle = (
        <button
          className="mx-3 rounded bg-success py-1 px-3"
          disabled={this.state.toggle}
          onClick={this.startTimer}
        >
          Start
        </button>
      );
    } else {
      toggle = (
        <button
          onClick={this.stopTimer}
          className="mx-3 rounded bg-warning py-1 px-3"
        >
          Stop
        </button>
      );
    }
    return (
      <div className="bg-dark text-white pb-3 w-50">
        <p className="text-center display-3 pt-5">Stopwatch</p>
        <div className="text-center">
          <p className="display-1">
            {this.state.min}
            <span className="h6">Min</span>
            {this.state.sec}
            <span className="h6">Sec </span>
            <span className="h2">{this.state.millisec}</span>
          </p>
        </div>
        <div className="text-center my-4">
          {toggle}

          <button
            onClick={this.resetTimer}
            className="mx-3 rounded bg-danger py-1 px-3"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
