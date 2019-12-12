import React from "react";
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.interval = null;
        this.state = {
            minutes: 5,
            second: 0,
            showInput: false,
            btn1: "start"
        };
    }

    handleInput = e => {
        this.setState({
            minutes: e.target.value
        });
    };
    showInput = () => {
        this.setState({
            showInput: true
        });
    };
    start = () => {
        this.interval = setInterval(
            () =>
                this.setState({
                    showInput: false,
                    second: this.state.second > 0 ? this.state.second - 1 : 59,
                    minutes:
                        this.state.second === 0
                            ? this.state.minutes - 1
                            : this.state.minutes
                }),
            1000
        );
    };

    stop = () => {
        console.log("stop");
        clearInterval(this.interval);
    };

    reset = () => {
        this.stop();
        this.setState({
            minutes: 5,
            second: 0
        });
    };
    // firstBtn = () => {
    //     this;
    // };
    render() {
        if (this.state.minutes === 0 && this.state.second === 0) this.stop();
        if (this.state.showInput) {
            return (
                <div>
                    <h1>Timer</h1>
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.minutes}
                        onChange={this.handleInput}
                        placeholder="Minutes"
                    />

                    <small>m</small>
                    <small>s</small>

                    <button onClick={this.start}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Timer</h1>
                    <h1>
                        {this.state.minutes}
                        <small>m</small> {this.state.second}
                        <small>s</small>
                    </h1>
                    <button onClick={this.start}>Start</button>
                    <button onClick={this.showInput}>Set Minutes</button>

                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            );
        }
    }
}
