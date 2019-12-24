import React from 'react';
import Button from './Components/Button';
import {
  incrementCounter,
  decrementCounter,
  multiplyCounter,
  divideCounter,
  remCounter,
  evenCounter,
  oddCounter
} from './action';
import store from './store';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: 0
    };
  }

  componentDidMount() {
    store.dispatch(incrementCounter(parseInt(this.state.inputValue)));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleData = action => {
    store.dispatch(action(parseInt(this.state.inputValue)));
  };
  render() {
    return (
      <div className='container p-5'>
        <div className='form-group'>
          <input
            type='text'
            className='form-control w-25'
            value={this.state.inputValue}
            onChange={this.handleChange}
            name='inputValue'
          />
        </div>
        <div className='d-flex justify-space-around'>
          <Button
            label='Increment'
            varient='btn btn-primary mx-2'
            callBack={() => this.handleData(incrementCounter)}
          />
          <Button
            label='Decrement'
            varient='btn btn-primary mx-2'
            callBack={() => this.handleData(decrementCounter)}
          />

          <Button
            label='Multiply'
            varient='btn btn-primary mx-2'
            callBack={() => this.handleData(multiplyCounter)}
          />
          <Button
            label='Divide'
            varient='btn btn-primary mx-2'
            callBack={() => this.handleData(divideCounter)}
          />
          <Button
            label='Reminder'
            varient='btn btn-primary mx-2'
            callBack={() => this.handleData(remCounter)}
          />
          <Button
            label='Even Increment'
            varient='btn btn-primary mx-2'
            callBack={() => this.handleData(evenCounter)}
          />
          <Button
            label='Odd Increment'
            varient='btn btn-primary mx-2'
            callBack={() => this.handleData(oddCounter)}
          />
        </div>
        <p className='display-1 lead'>{store.getState().count.toString()}</p>
      </div>
    );
  }
}

export default App;
