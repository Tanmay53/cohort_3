# App.js 

```
import React from 'react'
import Stopwatch from './Component/Stopwatch'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0,
      label:'START',
      watchOn:false
    }
  }

  

  onReset=()=>{
    console.log('reset button is pressed, everything is set to default now', this.state)
    this.setState({
      counter:0,
      label:'START',
      watchOn:false
    })
  }

  startStop=(e)=>{
    let updatedCounter=e.target.value

    if (e.target.value!='start'){
      this.setState((prevState)=>{ 
        console.log('previous state',prevState)
  
        let newStatusWatchOn=!(prevState.watchOn)
  
        let newlabel=(newStatusWatchOn) ? 'STOP':'START'
        console.log('new label when the button is clicked',newlabel)
  
        return (
          {
            counter:updatedCounter,
            label:newlabel,
            watchOn:newStatusWatchOn
          }
        )
      })
    }
    else{
      this.setState((prevState)=>{ 
        console.log('previous state',prevState)
  
        let newStatusWatchOn=!(prevState.watchOn)
  
        let newlabel=(newStatusWatchOn) ? 'STOP':'START'
        console.log('new label when the button is clicked',newlabel)
  
        return (
          {
            label:newlabel,
            watchOn:newStatusWatchOn
          }
        )
      })
    }
    
  }
  
  render(){
    console.log('render called, now the state is',this.state);
    if (this.state.watchOn){
      return (
        <div>
          <Stopwatch item={this.state} onReset={this.onReset} startStop={this.startStop}/>
        </div>
      )
    }
    else{
      return (
        <div className='card text-center col-6 offset-3'>
          <div className='card-header'>STOP-WATCH
          </div>
          <div className='card-body'>
            <h2>{this.state.counter}</h2>
          </div>
          <div className='card-footer'>
            <button className='btn btn-primary mx-3' value='start' onClick={this.startStop}>{this.state.label}</button>
            <button className='btn btn-secondary mx-3' onClick={this.onReset}>RESET</button>
          </div>
        </div>
      )
    }
  }
}

export default App
```


# stopwatch.js 

```
import React from 'react'

class Stopwatch extends React.Component{
  constructor(props){
    super(props)
    this.state={
      number:1
    }
  }

  // componentDidMount(){
  //   this.interval=setInterval(()=>{
  //     this.setState((prevState)=>{ 
  //       return {
  //         number :prevState.number+1
  //       }
  //     })
  //   },1000)
  // }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  

  render(){
    return (
      <div className='card text-center col-6 offset-3'>
          <div className='card-header'>STOP-WATCH-CHILD
          </div>
          <div className='card-body'>
            <h2>{this.state.number}</h2>
          </div>
          <div className='card-footer'>
            <button className='btn btn-primary mx-3' value = {this.state.number} onClick={this.props.startStop}>{this.props.item.label}</button>
            <button className='btn btn-secondary mx-3' onClick={this.props.onReset}>RESET</button>
          </div>
      </div>
    )
  }
}

export default Stopwatch

```