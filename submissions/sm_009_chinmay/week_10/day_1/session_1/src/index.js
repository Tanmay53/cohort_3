import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {createStore} from 'redux'
import {incrementCounter, decrementCounter, multiplyCounter, divideCounter, modCounter} from './actions'
import counter from './reducer'

const store = createStore(counter);
// console.log(store.getState())

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            input: 0
        }
    }

    render() {
        return (
          <div className="App">
            <h1>Count: {store.getState().count} </h1>
            <br/>
            <input type='number' onChange={e=>this.setState({input: e.target.value})} placeholder='Please enter x'/>
            <br/>
            <button onClick={()=> store.dispatch(decrementCounter(parseInt(this.state.input)))}>- by x</button>
            <button onClick={()=> store.dispatch(incrementCounter(parseInt(this.state.input)))}>+ by x</button>
            <button onClick={()=> store.dispatch(multiplyCounter(parseInt(this.state.input)))}>Multiply by x</button>
            <button onClick={()=> store.dispatch(divideCounter(parseInt(this.state.input)))}>Divide count by x</button>
            <button onClick={()=> store.dispatch(modCounter(parseInt(this.state.input)))}>Modulo by x</button>
            <br/>
            <br/>
          </div>
        );
    }
}
const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA