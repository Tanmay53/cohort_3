import React from 'react';
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.interval = null;
        this.state = {
            minutes: 1,
            second: 0,
            inp: false,
            btn1: "start"
        };
    }
    handleInput = e => {
        e.preventDefault();
        this.setState({
            minutes: e.target.value
        });
    };
    inp = () =>{
      
        this.setState({
            inp: true
        })
    };
    start = () => {
        this.interval = setInterval(
            () =>
                this.setState({
                    inp: false,
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


    render() {
        if (this.state.minutes === 0 && this.state.second === 0) this.stop();
        if (this.state.inp) {
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

                    <button className="p-2 m-2" onClick={this.start}>Start</button>
                    <button className="p-2 m-2" onClick={this.stop}>Stop</button>
                    <button className="p-2 m-2" onClick={this.reset}>Reset</button>
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
                    <button className="p-2 m-2" onClick={this.start}>Start</button>
                    <button className="p-2 m-2" onClick={this.inp}>Set Minutes</button>

                    <button className="p-2 m-2" onClick={this.stop}>Stop</button>
                    <button className="p-2 m-2" onClick={this.reset}>Reset</button>
                </div>
            );
        }
    }

};