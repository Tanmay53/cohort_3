import React from "react";
export default class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.interval = null;
        this.state = {
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
                        this.state.millisecond === 100
                            ? this.state.second + 1
                            : this.state.second
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
            millisecond: 0
        });
    };

    render() {
        return (
            <div>
                <h1>StopWatch</h1>
                <h1>
                    {this.state.second}
                    <small>s</small> {this.state.millisecond}
                </h1>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
