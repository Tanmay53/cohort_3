import React, { Component } from "react";

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 0,
      sec: 0,
      millisec: "00",
      toggle: false
    };
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.addSec();
    }, 10);
    this.setState({
      toggle: true
    });
  };

  addSec = () => {
    let count = Number(this.state.millisec);
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
    clearInterval(this.interval);
    this.setState({
      toggle: false
    });
  };

  resetTimer = () => {
    clearInterval(this.interval);
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
          className="mx-3 rounded bg-success py-2 px-4"
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
          className="mx-3 rounded bg-warning py-2 px-4"
        >
          Stop
        </button>
      );
    }
    return (
      <div className="bg-dark text-white pb-3 w-50">
        <p className="text-center display-3 pt-5">Stopwatch</p>
        <div className="text-center">
          <p className="display-2">
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
            className="mx-3 rounded bg-danger py-2 px-4"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
