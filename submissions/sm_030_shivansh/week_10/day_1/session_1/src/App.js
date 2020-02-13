import React from 'react';
import './App.css';
import store from "./redux/store";
import { increment, decrement, multiplyCounter, divideCounter, remainder, incrementOddEven } from "./redux/action"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: 0
    }


  }

  handleChange = (event) => {
    let x = event.target.value;
    // console.log(x);

    this.setState({
      input: x,
    })
  }
  render() {
    // console.log(store);
    // console.log(store.getState().count);
    // console.log("render", this.state.input);
    let x = this.state.input;
    return (

      <div className="container m-5">
        {/* {console.log("x", x)} */}
        <div>
          <h1>Enter X:</h1>
          <input type="number" className="form-control" onChange={this.handleChange} />
        </div>
        <div className="row my-5">

          <button
            className="btn btn-info btn-lg m-2 "
            onClick={() => store.dispatch(increment(this.state.input))} >
            Increment By X
          </button>

          <button
            className="btn btn-danger btn-lg m-2"
            onClick={() => store.dispatch(decrement(this.state.input))} >
            Decrement By X
          </button>

          <button
            className="btn btn-light btn-lg m-2 "
            onClick={() => store.dispatch(multiplyCounter(x))} >
            Multiply By X
          </button>

          <button
            className="btn btn-dark btn-lg m-2"
            onClick={() => store.dispatch(divideCounter(x))}>
            Divide By X
          </button>

          <button
            className="btn btn-primary btn-lg m-2"
            onClick={() => store.dispatch(remainder(x))} >
            Modulus By X
          </button>


          <button
            className="btn btn-success btn-lg m-2 "
            onClick={() => store.dispatch(incrementOddEven(x))} >

            Increment Odd/Even
          </button>







        </div>
        <div className="text-center">
          <h1 className="display-1 text-info">Count: {store.getState().count}</h1>
        </div>

      </div >
    )
  }

}

export default App;
