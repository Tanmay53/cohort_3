import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      sec: 0,
      min: 0,
      start: true,
      toggle: true
    };
  }

  changeHandler = e => {
    this.setState({
      time: e.target.value
    });
  };

  input = () => {
    let val = parseInt(this.state.time);
    let sec = val % 60;
    let min = Math.floor(val / 60);
    this.setState({
      sec: sec,
      min: min,
      time: "",
      start: false
    });
  };
  subSec = () => {
    let sec = this.state.sec;
    let min = this.state.min;
    if (min === 0 && sec === 0) {
      clearInterval(this.y);
      this.setState({
        min: 0,
        sec: 0,
        start: false
      });
    } else if (min !== 0 && sec === 0) {
      min--;
      sec = 60;
    } else if (sec === 0) {
      min--;
      sec = 60;
    }
    sec--;
    this.setState({
      sec: sec,
      min: min
    });
  };

  startTimer = () => {
    this.y = setInterval(() => {
      this.subSec();
    }, 1000);
    this.setState({
      start: true,
      toggle: false
    });
  };
  stopTimer = () => {
    clearInterval(this.y);
    this.setState({
      start: false,
      toggle: true
    });
  };
  resetTimer = () => {
    clearInterval(this.interval);
    this.setState({
      min: 0,
      sec: 0,
      start: true,
      toggle: true
    });
  };

  render() {
    let toggle;
    if (this.state.toggle) {
      toggle = (
        <button
          className="mx-3 rounded bg-success py-2 px-4"
          disabled={this.state.start}
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
      <div className="w-50 bg-dark text-center text-white">
        <div className="display-3 text-center pt-4">Timer</div>
        <input
          className="bg-dark rounded text-white ml-3 my-3 py-2 pl-3 "
          type="number"
          placeholder="Enter time in sec"
          value={this.state.time}
          onChange={e => this.changeHandler(e)}
        ></input>
        <button
          className="mx-3 rounded bg-warning py-2 px-3 "
          onClick={this.input}
        >
          Enter
        </button>
        <div className="text-center">
          <h1 className="display-3">
            {this.state.min}
            <span className="h6">min</span>
            <span>{this.state.sec}</span>
            <span className="h6">s </span>
            <span className="h3">{this.state.milisec}</span>
          </h1>
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

export default Timer;
