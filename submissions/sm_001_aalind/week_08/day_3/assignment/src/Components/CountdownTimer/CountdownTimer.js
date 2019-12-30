import React, {Component} from "react";

class CountdownTimer extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            mainTimer: 5,
            tempTimer: 5,
            timerOn: false,
            timerCompleted: false
        }
        this.state = this.initialState
    }

    onchangeHandler = (event) => {
        let timerValue = (event.target.value !== '') ? Math.abs(event.target.value) : '';

        this.setState({
            mainTimer: timerValue,
            tempTimer: timerValue
        });
    }

    startStopHandler = () => {
        if(this.state.mainTimer === '' || this.state.mainTimer === 0) {
            console.log('Please enter a valid value !!');
            return;
        }

        this.setState((prevState) => {
            return {
                timerOn: !prevState.timerOn
            }
        }, this.startStopTimer);
    }

    startStopTimer = () => {
        if(this.state.timerOn) {
            this.timerId = setInterval(() => {
                this.startTimer();
            }, 1000);
        } else {
            this.componentWillUnmount()
        }
    }

    startTimer = () => {
        this.setState((prevState) => {
            if(prevState.tempTimer <= 1) {
                console.log('Timer completed!')
                this.componentWillUnmount()
            }

            return {
                tempTimer: (prevState.timerCompleted) ? 0 : prevState.tempTimer - 1,
                timerCompleted: (prevState.tempTimer <= 1) ? true : false
            }
        })
    }

    resetHandler = () => {
        this.componentWillUnmount();
        this.setState((prevState) => {
            return {
                ...this.initialState,
                mainTimer: prevState.mainTimer,
                tempTimer: prevState.mainTimer
            }
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                <h1>Countdown Timer</h1>
                <input type="number" value={this.state.mainTimer} onChange={this.onchangeHandler} min="0" />
                <button onClick={this.startStopHandler} disabled={this.state.timerCompleted}>{(this.state.timerOn) ? 'Stop' : 'Start'}</button>
                <button onClick={this.resetHandler}>Reset</button>
                <p>{this.state.tempTimer}</p>
                
            </div>
        )
    }
}

export default CountdownTimer