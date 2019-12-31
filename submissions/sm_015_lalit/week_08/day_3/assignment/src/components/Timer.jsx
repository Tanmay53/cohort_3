import React from 'react';
class Timer extends React.Component {
    render() {
        return (
            <div className="mt-3">
                <input onChange={this.props.inputfunction} type="number" placeholder="Enter Seconds here !" className="input" />
                {(this.props.TimerX != null) ? <p id="toZeroSec" className="text-center m-3">{this.props.TimerX} seconds</p> : <p></p>}
            </div>
        )
    }
}

export default Timer;
