import React from 'react'
import Stopwatch from './Component/Stopwatch'
import Timer from './Component/Timer'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      toggle:false,
      millisec:0,
      sec:0,
      min:0,
      hour:0,

      stopwatchTab:false,
      timerTab:false,

      timerToggle:false,
      timerHour:0,
      timerMin:0,
      timerSec:0,

      displayInput:true,
      displayTimer:false
    }
  }

  /* FUNCTIONALITIES OF STOP WATCH*/

  handleStart=()=>{

    this.setState((prevState)=>{
      return {
        toggle:!prevState.toggle,
      }
    })

    this.x=setInterval(()=>{
      this.setState((prevState)=>{
        return {
          millisec:prevState.millisec+1
        }
      })
      if (this.state.millisec>99){
        this.setState((prevState)=>{
          return {
            millisec:0,
            sec:prevState.sec+1
          }
        })
      }
      if (this.state.sec>59){
        this.setState((prevState)=>{
          return {
            sec:0,
            min:prevState.min+1
          }
        })
      }
      if (this.state.min>59){
        this.setState((prevState)=>{
          return {
            min:0,
            hour:prevState.hour+1
          }
        })
      }
    },10)
  }

  handleStop=()=>{

    this.setState((prevState)=>{
      return {
        toggle:!prevState.toggle
      }
    })

    clearInterval(this.x)
  }

  handleReset=()=>{

    clearInterval(this.x)

    this.setState({
      toggle:false,
      millisec:0,
      sec:0,
      min:0,
      hour:0,
    })
  }
  /*---------------------------------------------------------------------------*/

  timerTab=(event)=>{
    this.setState({
      timerTab:true,
      stopwatchTab:false
    })
  }

  stopwatchTab=(event)=>{
    this.setState({
      timerTab:false,
      stopwatchTab:true
    })
  }

  /* FUNCTIONALITIES OF A TIMER */
  handleTimerInput=(e)=>{
    if (e.target.name==='timerSec'){
      if ((parseInt(e.target.value)>=0 && parseInt(e.target.value)<=59)){
        this.setState({
          timerSec:parseInt(e.target.value)
        })
      }
      else{
        this.setState({
          timerSec:parseInt(0)
        })
      }
    }

    if (e.target.name==='timerMin'){
      if ((parseInt(e.target.value)>=0 && parseInt(e.target.value)<=59)){
        this.setState({
          timerMin:parseInt(e.target.value)
        })
      }
      else{
        this.setState({
          timerMin:parseInt(0)
        })
      }
    }

    if(e.target.name==='timerHour'){
      if (parseInt(e.target.value)>=0){
        this.setState({
          timerHour:parseInt(e.target.value)
        })
      }
      else{
        this.setState({
          timerHour:parseInt(0)
        })
      }
    }

  }
  
  handleTimerStart=()=>{
    this.setState((prevState)=>{
      return {
        timerToggle:!prevState.timerToggle,
        displayTimer:true,
        displayInput:false
      }
    })

    this.timerInterval=setInterval(()=>{
        if (this.state.timerSec>0){
          this.setState((prevState)=>{
            return {
              timerSec:prevState.timerSec-1
            }
          })
        }

        if (this.state.timerSec===0){
          if (this.state.timerMin>0){
            this.setState(prevState=>{
              return {
                timerSec:59,
                timerMin:prevState.timerMin-1
              }
            })
          }
          if (this.state.timerMin===0){
            if (this.state.timerHour>0){
              this.setState(prevState=>{
                return {
                  timerMin:59,
                  timerHour:prevState.timerHour-1
                }
              })
            }
            if (this.state.timerHour===0 && this.state.timerMin===0 && this.state.timerSec===0){
              this.setState({
                timerToggle:false
              })
            }
          }
        }
    },1000)
  }
  
  handleTimerStop=()=>{
    this.setState((prevState)=>{
      return {
        timerToggle:false
      }
    })

    clearInterval(this.timerInterval)
  }

  handleTimerReset=()=>{
    clearInterval(this.timerInterval)

    this.setState({
      timerToggle:false,
      timerHour:0,
      timerMin:0,
      timerSec:0,
      displayInput:true,
      displayTimer:false
    })
  }
  
  /**---------------------------------------------------------------------------**/


  render(){
    console.log(`timerTab`,this.state.timerTab,`stopwatch`,this.state.stopwatchTab)
    console.log(this.state)
    return (
        <div>
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs bg-transparent row">
                <li className="nav-item col-6">
                  <button 
                    className={this.state.timerTab ? "nav-link active":"nav-link"}
                    onClick={this.timerTab}
                  >
                    <h5>TIMER</h5>
                  </button>
                </li>
                <li className="nav-item col-6">
                  <button 
                    className={this.state.stopwatchTab ? "nav-link active":"nav-link"}
                    onClick={this.stopwatchTab}
                  >
                    <h5>STOP WATCH</h5>
                    </button>
                </li>
              </ul>
                {this.state.timerTab 
                &&
                <Timer
                  timerLabel={this.state.timerToggle ? `STOP` : `START`}
                  timerStart={this.handleTimerStart}
                  timerStop={this.handleTimerStop}
                  item={this.state}
                  timerReset={this.handleTimerReset}
                  handleTimerInput={this.handleTimerInput}
                  />
                }

                {
                  this.state.stopwatchTab
                  &&
                  <Stopwatch 
                    label={this.state.toggle ? `STOP` : `START`}
                    start={this.handleStart}
                    stop={this.handleStop}
                    item={this.state}
                    reset={this.handleReset}
                    />
                }

              
            </div>
          </div>
        </div>
    )
  }
}

export default App