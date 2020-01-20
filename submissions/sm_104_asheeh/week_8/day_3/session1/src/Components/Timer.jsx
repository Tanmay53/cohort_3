import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isStart: false,
            seconds: 0
             
        }
    }

    inputFunction = (event) => {
        let enteredVal = event.target.value
        this.setState({
            seconds: enteredVal
        })
        console.log(this.state.seconds)
    }

    tick = () => {
        this.setState({
            seconds: this.state.seconds - 1
        })
        if(this.state.seconds === 0)
         {
            clearInterval(this.timerID)
            this.setState({
                isStart: false
            })
         }
    }

    startTimer = () => {
         this.timerID = setInterval(() => this.tick(), 1000)
         this.setState({
             isStart: true
         })
         
    }

    stopTimer = () => {
        clearInterval(this.timerID)
        this.setState({
            isStart: false
        })
    }

    resetTimer = () => {
        clearInterval(this.timerID)
        this.setState({
            isStart: false,
            seconds:0
        })
    }
    
    render() {
        return (
            <div className="text-center">
                <input value={this.state.enteredVal} onChange={(event) => this.inputFunction(event)} type="text" placeholder="Enter the seconds"></input>
                <h1>{this.state.seconds} </h1>
                {
                    (this.state.isStart)? (
                            <button type="submit" onClick={this.stopTimer}>Stop</button>
                        
                        ):
                        (
                            <button type="submit" onClick={this.startTimer}>Start</button>
                        
                    )
                }
                <button type="submit" onClick={this.resetTimer}>Reset</button>
            </div>
        )
    }
}
