import React from 'react';
import Seconds from './seconds/Seconds';
let timerSecond = null;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: undefined,
      toggleTimer: true,
      toggleStart: true,
      seconds: 0
    };
  }

  handleInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  runTimer = e => {
    if (this.state.toggleStart === false) {
      this.setState({ toggleStart: true });
    }
    console.log(this.state.toggleStart);
    if (timerSecond == null) {
      this.setState({ seconds: this.state.inputValue, toggleTimer: false });
    }
    if (this.state.toggleStart) {
      timerSecond = setInterval(() => {
        let updatedSeconds = this.state.seconds - 1;
        if (updatedSeconds <= 0) {
          this.callAlert();
        }
        this.setState({ seconds: updatedSeconds });
      }, 1000);
    }
  };

  stopTimer = e => {
    this.setState({ toggleStart: false });
    clearInterval(timerSecond);
  };
  resetTimer = e => {
    this.setState({
      toggleStart: true,
      toggleTimer: true,
      seconds: 0,
      inputValue: 0
    });
    clearInterval(timerSecond);
    timerSecond = null;
  };
  callAlert = () => {
    this.setState({ toggleTimer: true, seconds: 0, inputValue: null });
    clearInterval(timerSecond);
    timerSecond = null;
    alert('Timer End');
  };

  render() {
    const toggle = this.state.toggleTimer;
    let timerControl;
    if (toggle) {
      timerControl = (
        <input
          type='text'
          placeholder='0'
          className='second-input'
          value={this.state.inputValue}
          onChange={this.handleInput}
        />
      );
    } else {
      timerControl = (
        <div className='second-div'>
          <Seconds data={this.state.seconds} />
        </div>
      );
    }
    return (
      <div className='timer'>
        <h3>Dr Strange Timer</h3>
        {timerControl}
        <div className='d-flex'>
          <button className='start-timer' onClick={this.runTimer}>
            Start
          </button>
          <button className='stop-timer' onClick={this.stopTimer}>
            Stop
          </button>
          <button className='reset-timer' onClick={this.resetTimer}>
            Reset
          </button>
        </div>
        <small>Use only Seconds</small>
      </div>
    );
  }
}

export default Timer;
