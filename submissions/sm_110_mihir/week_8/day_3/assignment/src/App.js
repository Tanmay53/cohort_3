import React from "react";
import "./Components/style.css";
import StopWatch from "./Components/StopWatch";
import Timer from "./Components/Timer";
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
                <button onClick={this.handleStopWatch}>StopWatch</button>
                <button onClick={this.handleTimer}>Timer</button>
                {this.display()}
                {/* {this.showTimer()} */}
                {/* <StopWatch />
                <Timer /> */}
            </div>
        );
    }
}
