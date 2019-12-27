import React from 'react'

export default class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value:'',
            isTimerStart : false,
            btnName:'START',
            time:0
        }
    }

    componentDidUpdate(input){
        console.log('component did updaate')
        if(input === true){
            this.timerId = setInterval(()=>{
                this.tick()
            },1000)
        }
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick = () =>{
        this.setState({
            time:(this.state.time <= 0) ? "Time's Up!":this.state.time-1
        })
        if(this.state.time < 0){
            this.componentWillUnmount()
        }
        console.log('checking tick tick ',this.state.time)
    }

    handleStart = () =>{
        this.setState({
            isTimerStart: !this.state.isTimerStart,
            btnName:(this.state.isTimerStart === false)?'START':'STOP',
            time:this.state.value
        })
        if(this.state.isTimerStart === true){
            this.componentDidUpdate(this.state.isTimerStart)
        }else if(this.state.isTimerStart === false){
            this.componentWillUnmount()
        }
    }

    handleReset = () =>{
        this.setState({
            time:0,
            value:0
        })
        this.componentWillUnmount()
    }


    render(){
        return (
            <div>
                <h1>Timer</h1>
                <input type='text' value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})} placeholder='Enter Seconds'></input>
                <button className='btn btn-sm btn-primary text-white ml-3' onClick={this.handleStart}>{this.state.btnName} Timer!</button>
                <button className='btn btn-sm btn-primary text-white ml-3' onClick={this.handleReset}>Reset</button>
                <h3>Time Left: {this.state.time}</h3>
            </div>
        )
    }
}
