
import React from "react";
export default class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.interval = null;
        this.state = {
            minutes: 0,
            second: 0,
            millisecond: 0
        };
    }

    start = () => {
        this.interval = setInterval(
            () =>
                this.setState({
                    millisecond:
                        this.state.millisecond < 100
                            ? this.state.millisecond + 1
                            : 0,
                    second:
                        (this.state.millisecond === 100) ? this.state.second + 1 
                        : (this.state.second < 60 ? this.state.second : 0),

                    minutes: 
                    this.state.second === 60 ? this.state.minutes + 1
                    :(this.state.minutes)
                }),
                10
        );
    };

    stop = () => {
        console.log("stop");
        clearInterval(this.interval);
    };

    reset = () => {
        this.stop();
        this.setState({
            second: 0,
            millisecond: 0,
            minutes: 0
        });
    };

    render() {
        return (
            <div>
                <h1 className="text-danger">Stop Watch</h1>
                <h1>
                    {this.state.minutes}
                    <small>min</small>
                    {this.state.second}
                    <small>s</small> {this.state.millisecond}
                    <small>ms</small>
                </h1>
                <button className="p-2 m-2" onClick={this.start}>Start</button>
                <button className="p-2 m-2" onClick={this.stop}>Stop</button>
                <button className="p-2 m-2" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

