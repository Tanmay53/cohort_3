import React, {Component} from "react";
import "./stopwatch.css";

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalMilliseconds: 0,
            milliseconds: 0,
            seconds: 0,
            minutes: 0,
            hours: 0,
            stopwatchOn: false
        }
    }

    startStopHandler = () => {
        this.setState(prevState => {
            return {stopwatchOn: !prevState.stopwatchOn}
        }, this.startStopTimer);
    }

    startStopTimer = () => {
        if(this.state.stopwatchOn) {
            this.startId = setInterval(
                () => this.startTimer(), 
                10
            );
        } else {
            this.stopTimer()
        }
    }

    startTimer = () => {
        this.setState(prevState => {
            return {
                totalMilliseconds: prevState.totalMilliseconds + 1,
                milliseconds: prevState.totalMilliseconds % 100,
                // milliseconds: (prevState.milliseconds !== 99) ? prevState.milliseconds + 1 : 0,
                // seconds: (prevState.milliseconds !== 99) ? prevState.seconds : (prevState.seconds === 4) ? 0 : prevState.seconds+1,
                seconds: Math.floor((prevState.totalMilliseconds % 6000)/100),
                minutes: Math.floor((prevState.totalMilliseconds % 360000)/6000),
                // minutes: (prevState.seconds !== 4) ? prevState.minutes : (prevState.minutes === 4) ? 0 : prevState.minutes + 1
            }
        })
    }

    stopTimer = () => clearInterval(this.startId);

    resetHandler = () => {
        this.stopTimer();
        this.setState(prevState => {
            return {
                milliseconds: 0,
                seconds: 0,
                hours: 0,
                stopwatchOn: false
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Stopwatch</h1>
                <p>{this.state.hours} : {this.state.minutes} : {this.state.seconds} : {this.state.milliseconds}</p>
                <button className="startBtn" onClick={this.startStopHandler}>
                    {(this.state.stopwatchOn) ? 'Stop': 'Start'}
                </button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;