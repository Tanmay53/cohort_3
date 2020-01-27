import React, { Component } from 'react'

export default class StopWatch extends Component {
    constructor(props){
        super(props)

        this.state={
            isStart: false,
            millisecond:0,
            second:0,
            minute:0,
            hour:0
        }
    }

    tick(){
        this.setState({
            millisecond: this.state.millisecond + 1
        });

        if(this.state.millisecond === 1000)
        {
            this.setState({
                millisecond: this.state.millisecond - 1000,
                second:this.state.second + 1
            })
        }
        if(this.state.second === 60)
        {
            this.setState({
                second: this.state.second - 60,
                minute: this.state.minute + 1
            })
        }
        if(this.state.minute === 60)
        {
            this.setState({
                minute: this.state.minute - 60,
                hour: this.state.hour + 1
            })
        }
    }

    startStopWatch = () => {
        this.timerID = setInterval(() => {this.tick()}, 1)
        // console.log(this.timerID)
        this.setState({
            isStart:true
        })

    }

    stopStopWatch = () => {
        clearInterval(this.timerID)
        this.setState({
            isStart:false
        })
    }

    resetStopWatch = () => {
        clearInterval(this.timerID)
        this.setState({
            isStart:false,
            millisecond:0,
            second:0,
            minute:0,
            hour:0
        })
    }

    render() {
        return (
            <div className="container bg-dark text-white text-center">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-2">
                        <h1>{this.state.hour} :</h1>
                    </div>
                    <div className="col-2">
                        <h1>{this.state.minute} :</h1>

                    </div>
                    <div className="col-2">
                        <h1>{this.state.second} :</h1>
                    </div>
                    <div className="col-2">
                        <h1>{this.state.millisecond}</h1>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-2"></div>
                    <div className="col-8 mt-4">
                        {
                            (this.state.isStart)?(
                                <button onClick={this.stopStopWatch}>Stop</button>
                                ):
                                (
                                    <button onClick={this.startStopWatch}>Start</button>
                            )
                        }
                        <button onClick={this.resetStopWatch}>Resert</button>
                    </div>
                </div>
            </div>
        )
    }
}
