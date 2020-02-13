import React, { Component } from 'react';
import app_store from './redux/store';
import {
  incrementCount,
  decrementCount,
  incrementForOddEven,
  multiplyCount,
  divideCount,
  moduloCount
} from './redux/action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increment_by: ''
    };
  }

  changeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  clickHandler = () => {
    let name = event.target.name;
    let value = Number(this.state.increment_by);

    if (name === 'increment') {
      app_store.dispatch(incrementCount(value));
    } else if (name === 'decrement') {
      app_store.dispatch(decrementCount(value));
    } else if (name === 'increment_for_odd_even') {
      app_store.dispatch(incrementForOddEven(value));
    } else if (name === 'multiply') {
      app_store.dispatch(multiplyCount(value));
    } else if (name === 'divide') {
      app_store.dispatch(divideCount(value));
    } else if (name === 'modulo') {
      app_store.dispatch(moduloCount(value));
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center mt-2'>
          <h1 className='header'>Increment - Decrement Counter</h1>
        </div>
        <div>
          <input
            type='number'
            name='increment_by'
            value={this.state.increment_by}
            onChange={this.changeHandler}
            min='0'
            required
            className='form-control'
          />
        </div>
        <div className='row justify-content-center'>
          <input
            type='button'
            name='increment'
            value='Increment'
            onClick={this.clickHandler}
            className='btn btn-success m-1'
          />
          <input
            type='button'
            name='decrement'
            value='Decrement'
            onClick={this.clickHandler}
            className='btn btn-danger m-1'
          />
          <input
            type='button'
            name='increment_for_odd_even'
            value='Increment for odd/even'
            onClick={this.clickHandler}
            className='btn btn-success m-1'
          />
          <input
            type='button'
            name='multiply'
            value='*'
            onClick={this.clickHandler}
            className='btn btn-success m-1'
          />
          <input
            type='button'
            name='divide'
            value='/'
            onClick={this.clickHandler}
            className='btn btn-success m-1'
          />
          <input
            type='button'
            name='modulo'
            value='%'
            onClick={this.clickHandler}
            className='btn btn-success m-1'
          />
        </div>
        <div className='row justify-content-center'>
          <p>Final Value: {app_store.getState().count}</p>
        </div>
      </div>
    );
  }
}

export default App;
