import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    timerStart = () => {
        this.x = setInterval(() => this.tick(), 1000)
    }

    timerStop = () => {
        clearInterval(this.x)
    }

    tick () {
        this.setState(() => ({
            count : this.state.count + 1
        }));
    }

    render(){
        return (
            <div>
                <h1>Count is {this.state.count}</h1>
                <button onClick={this.timerStart}>Start</button>
                <button onClick={this.timerStop}>Stop</button>
            </div>
        )
    }
}

export default Timer;
