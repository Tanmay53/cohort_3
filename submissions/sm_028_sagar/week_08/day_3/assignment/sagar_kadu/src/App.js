import React, { Component } from 'react'
import Stopwatch from './Components/Stopwatch'
import Timer from './Components/Timer'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            second:0,
            milliSec: 0,
            timer: new Date(),
            isPause:false,
            value:'START'
        }
    }
    
    componentDidUpdate(current){
        if(current === false){
            this.watchMilli = setInterval(()=>{
                this.tickMilli()
            },10)
        }
    }

    handleStop = () =>{
        this.setState({
            isPause:!this.state.isPause,
            value:(this.state.isPause === false)?'START':'STOP'
        })
        if(this.state.isPause === false){   
            this.componentDidUpdate(this.state.isPause)
        }else{
            this.componentWillUnmount()
        }
    }

    tickMilli = () =>{
        this.setState({
            milliSec:(this.state.milliSec === 99)? 0:this.state.milliSec+1,
            second:(this.state.milliSec === 99)?this.state.second+1:this.state.second
        })
    }

    componentWillUnmount(){
        clearInterval(this.watchMilli)
    }

    render() {
        return (
            <div className='container border mt-5'>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Timer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Stopwatch</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <Timer key={this.state.currentSec} 
                                startTimer={this.startTimer}
                                reset = {()=>this.reset}
                                handleChange = {this.handleChange}
                                value = {this.state.currentSec}
                                />
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <Stopwatch key={this.state.second} second={this.state.second} milliSec={this.state.milliSec} 
                                    reset={()=>this.setState({second:0,milliSec:0,value:'START'})}
                                    stopper={this.handleStop}
                                    value={this.state.value}
                            />
                        </div>
                </div>
            </div>
        )
    }
}
