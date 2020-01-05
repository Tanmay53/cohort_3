import React from 'react';

class Clock extends React.Component {
    constructor(props) {
       // console.log('constructor')
      super(props);
      this.state = {
          count:0,
          startIsDisabled:false
        };
    }
    resetTimer=()=>{
        let setTrue=this.state.startIsDisabled
        setTrue=false
       let nc=this.state.count
       nc=0
       this.setState({
           count:nc,
           startIsDisabled:setTrue})
       clearInterval(this.x)
    }
    stopTimer=()=>{
        let setTrue=this.state.startIsDisabled
        setTrue=false
       clearInterval(this.x)
       this.setState({
        startIsDisabled:setTrue
    })
    }
    startTimer =(e)=>{
        let setTrue=this.state.startIsDisabled
        setTrue=true
        this.x = setInterval(
            () => this.tick(),
            1000  
         );
         this.setState({
             startIsDisabled:setTrue
         })
    }
  
    tick() {
       let newcount=this.state.count
       newcount++
      this.setState({
        count: newcount
      });
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.count}.</h2>
          <button className="bg-success" onClick={this.startTimer} disabled={this.state.startIsDisabled}>START</button>
          <button className="bg-warning" onClick={this.stopTimer}>STOP</button>
          <button className="bg-danger" onClick={this.resetTimer}>RESET</button>
        </div>
      );
    }
  }
  export default Clock;
  