import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { incrementCounter, decrementCounter, multiply, divide, mod, inputs, custom } from './action';
import counter from './reducer';


const store = createStore(counter);

export default class Index extends Component {


	render() {
		return (
            <div>
            <h3 className="mt-5 text-success text-center">   Count : {store.getState().count} </h3>
				<div className="container border border-rounded shadow">
					<div className="row">
                        <div className="col-4 offset-4">
                    
							<input
								className="mt-5 form-control"
								type="number"
								placeholder="Enter the Value"
								onChange={(e) => store.dispatch(inputs(Number(e.target.value)))}
							  />
						</div>

						<div className="col-8 offset-2">
							<button
								className="offset-1 btn btn-primary btn-sm"
								onClick={() => store.dispatch(incrementCounter())}>
								Increment by Val
							</button>
							<button
								className="m-2 btn btn-primary btn-sm"
								onClick={() => store.dispatch(decrementCounter())}>
								Decrement by Val
							</button>
							<button className="m-2 btn btn-primary btn-sm" onClick={() => store.dispatch(multiply())}>
								Multiply by Val
							</button>
							<button className="m-2 btn btn-primary btn-sm" onClick={() => store.dispatch(divide())}>
								Divide by Val
							</button>
							<button className="m-2 btn btn-primary btn-sm" onClick={() => store.dispatch(mod())}>
								Remainder
							</button>
							<button
								className="offset-4 btn btn-lg btn-outline-info"
								onClick={() => store.dispatch(custom())}>
								Logic Depends on Val
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const render = () => ReactDOM.render(<Index />, document.getElementById('root'));
render();
store.subscribe(render);
