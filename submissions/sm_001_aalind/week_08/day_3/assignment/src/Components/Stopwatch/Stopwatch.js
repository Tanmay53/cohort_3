import React, {Component} from "react";
import "./stopwatch.css";

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            totalMilliseconds: 1,
            milliseconds: 0,
            seconds: 0,
            minutes: 0,
            hours: 0,
            stopwatchOn: false
        }
        this.state = this.initialState
    }

    // componentDidMount() {
        
    // }

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
            this.componentWillUnmount()
        }
    }

    startTimer = () => {
        this.setState(prevState => {
            return {
                totalMilliseconds: prevState.totalMilliseconds + 1,
                milliseconds: prevState.totalMilliseconds % 100,
                seconds: Math.floor((prevState.totalMilliseconds % 6000)/100),
                minutes: Math.floor((prevState.totalMilliseconds % 360000)/6000),
                hours: Math.floor((prevState.totalMilliseconds % 8640000)/360000)
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.startId);
    }

    resetHandler = () => {
        this.componentWillUnmount();
        this.setState(() => {
            return this.initialState
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