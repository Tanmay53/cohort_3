import React from 'react';
import {addVal, decVal, addValType, mulVal, divVal, remVal} from './redux/Action';
import store from './redux/Store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      x: e.target.value
    });
  }

  handleClick = (e) => {
    let type = e.target.name;
    if (type === "add") {
      store.dispatch(addVal(Number(this.state.x)));
    }
    else if (type === "dec") {
      store.dispatch(decVal(Number(this.state.x)));
    }
    else if (type === "addType") {
      store.dispatch(addValType(Number(this.state.x)));
    }
    else if (type === "mul") {
      store.dispatch(mulVal(Number(this.state.x)));
    }
    else if (type === "div") {
      store.dispatch(divVal(Number(this.state.x)));
    }
    else {
      store.dispatch(remVal(Number(this.state.x)));
    }

    this.setState({
      x: ''
    });
  }

  render() {
    let count = store.getState().count;
    return (
      <div>
        <input type = "number" placeholder = "Enter Factor" value = {this.state.x} onChange = {this.handleChange}></input>
        <button onClick = {this.handleClick} name = "add">Add Value</button>
        <button onClick = {this.handleClick} name = "dec">Dec Value</button>
        <button onClick = {this.handleClick} name = "addType">Increase Count Type</button>
        <button onClick = {this.handleClick} name = "mul">Multiply Value</button>
        <button onClick = {this.handleClick} name = "div">Divide Value</button>
        <button onClick = {this.handleClick} name = "rem">Remainder Value</button>
        <h1>Count is : {count}</h1>
      </div>
    );
  }
}


export default App;
