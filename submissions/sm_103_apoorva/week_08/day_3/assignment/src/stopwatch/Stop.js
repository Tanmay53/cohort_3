import React from 'react'

class Stop extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            milisec: 0,
            sec: 0,
            min:0,
            start : false
        }
    }

    addSec =()=>{
        let cnt = this.state.milisec
        let sec = this.state.sec
        let min = this.state.min
        if(cnt == 100)
        {
            sec++
            cnt = 0
            
        }
        if(sec == 60)
        {
            min++
            sec = 0
        }
        this.setState({
            milisec : cnt+1,
            sec : sec,
            min : min
        })
        
    }

    startTimer=()=>{
            this.x = setInterval(()=>{
                this.addSec()
            },10)
            this.setState({
                start : true
            })
    }
    stopTimer=()=>{
        clearInterval(this.x)
        this.setState({
            start : false
        })
    }

    render()
    {
        return(
            <div className="mx-4 bgLogin border-warning my-2 bg-dark text-white">
                <div className="display-4 text-center pt-4">
                    Stopwatch
                    <div className="text-center">
                        <h1 className="display-3">
                            {this.state.min}
                            <span className="h6">min</span>
                            <span>{this.state.sec}</span>
                            <span className="h6">s  </span>
                            <span className="h3">{this.state.milisec}</span>
                        </h1>
                    </div>
                </div>
                <div className="text-center my-4">
                    <button  onClick={this.startTimer} disabled={this.state.start} className="mx-3 rounded bg-warning py-1 px-3">Start</button>
                    <button  onClick={this.stopTimer} className="mx-3 rounded bg-warning py-1 px-3">Stop</button>
                    <button  onClick={()=>{this.setState({milisec:0,sec:0,start:false})}} className="mx-3 rounded bg-warning py-1 px-3">Reset</button>
                </div>
            </div>
        )
    }
}

export default Stop