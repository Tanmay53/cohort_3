import React from 'react'

class Time extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            time : "",
            sec: 0,
            min:0,
            start : true
        }
    }

    handleChange=(e)=>{
        this.setState({
            time : e.target.value
        })
    }

    set=()=>{
        let s = parseInt(this.state.time)
            let sec = s%60
            let min = Math.floor(s/60)
            if(min != 0 && sec == 0)
            {
                this.setState({
                    sec :60,
                    min : min-1,
                    time : "",
                    start: false
                })
            }
            else{
                this.setState({
                    sec :sec,
                    min : min,
                    time : "",
                    start: false
                })
            }
    }
    minusSec =()=>{
        let sec = this.state.sec
        let min = this.state.min
        sec--
        if(min == 0 && sec ==0)
        {
            clearInterval(this.y)
            this.setState({
                min:0,
                sec:0,
                start : false
            })
        }
        else if(sec == 0)
        {
            min--
            sec = 60
        }
        this.setState({
            sec : sec,
            min : min
        })
    }

    startTimer=()=>{
            this.y = setInterval(()=>{
                this.minusSec()
            },1000)
            this.setState({
                start : true
            })
    }
    stopTimer=()=>{
        clearInterval(this.y)
        this.setState({
            start : false
        })
    }


    render()
    {
        return(
            <div className="mx-4 bgLogin border-warning my-2 bg-dark text-white">
                <div className="display-4 text-center pt-4">
                    Timer
                </div>
                <input className="ml-3 my-3 py-2 pl-3 rounded border-warning bg-dark text-white " 
                    type="number"
                    placeholder="enter time in sec"
                    value={this.state.time}
                    onChange={(e)=>this.handleChange(e)}>
                </input>
                <button 
                    className="mx-3 rounded bg-warning py-2 px-3 "
                    onClick={this.set}>
                    Enter
                </button>
                <div className="text-center">
                    <h1 className="display-3">
                        {this.state.min}
                        <span className="h6">min</span>
                        <span>{this.state.sec}</span>
                        <span className="h6">s  </span>
                        <span className="h3">{this.state.milisec}</span>
                    </h1>
                </div>
                <div className="text-center my-4">
                    <button  onClick={this.startTimer} disabled={this.state.start} className="mx-3 rounded bg-warning py-1 px-3">Start</button>
                    <button  onClick={this.stopTimer} className="mx-3 rounded bg-warning py-1 px-3">Stop</button>
                    <button  onClick={()=>{this.setState({min:0,sec:0,start:false})}} className="mx-3 rounded bg-warning py-1 px-3">Reset</button>
                </div>
            </div>
        )
    }
}

export default Time