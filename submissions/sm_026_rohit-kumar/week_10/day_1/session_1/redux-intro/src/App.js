import React from 'react';
import {store, actionIncrement, actionDecrement, actionMultiply, actionDivide} from './store/store'
import { func } from 'prop-types';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      box: 0
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

    console.log(this.state)
  }


  incrementByX = () => {
    // console.log('called')
    store.dispatch(actionIncrement(Number(this.state.box)))
  }
  
  decrementByX = () => {
    store.dispatch(actionDecrement(Number(this.state.box)))
  }
  
  incrementEvenOdd = () => {
    var num = 0
    if(Number(this.state.box) % 2 == 0) 
      num = 2
    else
      num = 1
    
    store.dispatch(actionIncrement(num))
  }
  
  multiplyByX = () => {
    store.dispatch(actionMultiply(Number(this.state.box)))
  }
  
  divideByX = () => {
    store.dispatch(actionDivide(Number(this.state.box)))
  }

  render() {
  console.log(store.getState())
  return (
    <div className="App">
      <table>
        <tr>
          <td>Count:</td>
          <td>{store.getState().count}</td>
        </tr>
        <tr>
          <td>Remainder:</td>
          <td>{store.getState().rem}</td>
        </tr>
        <tr>
          <td>Value:</td>
          <td><input name='box' onChange={this.handleChange} type='text' placeholder='Enter value for x'></input> </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.incrementByX}>Increment by X</button>
          </td>
          <td>
            <button onClick={this.decrementByX} >Decrement by X</button>
          </td>
          <td>
            <button onClick={this.incrementEvenOdd } >Increment Even/Odd</button>
          </td>
          <td>
            <button onClick={this.multiplyByX} >Multiply by X</button>
          </td>
          <td>
            <button onClick={this.divideByX} >Divide by X</button>
          </td>
        </tr>
      </table>
    </div>
  );
  }
}

export default App;
