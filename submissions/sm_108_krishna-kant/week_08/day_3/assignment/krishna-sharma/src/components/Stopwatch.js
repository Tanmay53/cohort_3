import React from 'react';
import Seconds from './seconds/Seconds';
import Millisecond from './milliseconds/Millisecond';

let secondTimer = null;
let millisecondTimer = null;

class Stopwatch extends React.Component {
  //  Contructor
  constructor() {
    super();
    this.state = {
      seconds: 0,
      secondToggle: true,
      millisecond: 0,
      millisecondToggle: 0
    };
  }

  // Start Stop Watch
  runStopWatch = () => {
    if (this.state.secondToggle === false) {
      this.setState({ secondToggle: true });
    }

    secondTimer = setInterval(() => {
      if (this.state.secondToggle) {
        if (this.state.seconds >= 59) {
          this.setState({ seconds: 0 });
        } else {
          let updatedSecond = this.state.seconds + 1;
          console.log(updatedSecond);
          this.setState({ seconds: updatedSecond });
        }
      }
    }, 1000);

    millisecondTimer = setInterval(() => {
      if (this.state.secondToggle) {
        if (this.state.millisecond >= 100) {
          this.setState({ millisecond: 0 });
        } else {
          let updatedMillisecond = this.state.millisecond + 1;
          console.log(updatedMillisecond);
          this.setState({ millisecond: updatedMillisecond });
        }
      }
    }, 10);
  };

  //Stop StopWatch
  stopStopWatch = () => {
    // For seconds
    this.setState({ secondToggle: false });
    console.log(this.state.secondToggle);
    clearInterval(secondTimer);
    secondTimer = null;
    //  For Milliseconds
    this.setState({ millisecondToggle: false });
    console.log(this.state.secondToggle);
    clearInterval(millisecondTimer);
    millisecondTimer = null;
  };

  //   Reset Stopwatch
  resetStopWatch = () => {
    //   For Seconds
    this.setState({ seconds: 0, secondToggle: false });
    // For Milliseconds
    this.setState({ millisecond: 0, millisecondToggle: false });
  };

  render() {
    return (
      <div className='stop-watch'>
        <h3>Dr Strange stopwatch</h3>
        <div className='d-flex'>
          <Seconds key='seconds' data={this.state.seconds} />
          <Millisecond key='milliseconds' data={this.state.millisecond} />
        </div>
        <div className='d-flex'>
          <button
            className='start-stopwatch'
            id='start-stopwatch'
            onClick={this.runStopWatch}
          >
            Start
          </button>
          <button
            className='stop-stopwatch'
            id='stop-stopwatch'
            onClick={this.stopStopWatch}
          >
            Stop
          </button>
          <button
            className='reset-stopwatch'
            id='reset-stopwatch'
            onClick={this.resetStopWatch}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
