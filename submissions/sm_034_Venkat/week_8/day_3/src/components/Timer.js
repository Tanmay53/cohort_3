import React from 'react'
import './Timer.css'
import SubTimer from './SubTimer'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputHours: 0,
            inputMin: 1,
            inputSec: 0,
            setTime: false
        }
        this.setTimeFunction = this.setTimeFunction.bind(this)
    }
    setTimeFunction() {
        this.setState({ setTime: false })
    }

    render() {
        return (
            <div id="timerDiv">
                {/* <h3>Give time input in here.</h3> */}
                <div id="inputsDiv">
                    <div>
                        <p>Hours</p>
                        <input type="number" value={this.state.inputHours}
                            onChange={(event) => this.setState({ inputHours: event.target.value })} />
                    </div>
                    <div>
                        <p>Minutes</p>
                        <input type="number" value={this.state.inputMin}
                            onChange={(event) => this.setState({ inputMin: event.target.value })} />
                    </div>
                    <div>
                        <p>Seconds</p>
                        <input type="number" value={this.state.inputSec}
                            onChange={(event) => this.setState({ inputSec: event.target.value })} />
                    </div>
                </div>
                <button id="setTimeBtn" onClick={() => this.setState({ setTime: true })}>Set Time</button>

                {this.state.setTime ?
                    (<SubTimer time={(this.state.inputHours * 3600) +
                        (this.state.inputMin * 60) + Number(this.state.inputSec)} parentState={this.setTimeFunction} />) :
                    (console.log("initial State"))}
                {/* With out =>Number(this.inputSec)<= seconds are adding like a string */}
            </div>
        )
    }
}
export default Timer