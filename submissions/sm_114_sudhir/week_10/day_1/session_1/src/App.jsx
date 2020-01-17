import React, { Component } from 'react'
import {
    addCount,
    subCount,
    mulCount,
    divCount,
    remCount,
    updByEvenOdd} from './component/redux/action'
import {store} from './store'


export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            input : 0
        }
    }

    updateInput = (e) => {
        let val = this.state.input
        val = Number(e.target.value)
        this.setState({
            input : val
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-4 border border-primary rounded">
                        <h1>Counter</h1>
                        <div className="row">
                            <div className="col-4">
                                <label>Value of X</label>
                            </div>
                            <div className="col-8">
                                <input type="number" onChange={this.updateInput} id="input" className="form-control" placeholder="Enter the value of x" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mx-auto">
                            <h1 className="border border-primary rounded text-center">{store.getState().countOfX}</h1>
                            <div className="text-center">
                                <button className="btn btn-outline-primary m-2" onClick={() => store.dispatch(addCount(Number(this.state.input)))}>INCREMENT</button>
                                <button className="btn btn-outline-primary m-2" onClick={() => store.dispatch(subCount(Number(this.state.input)))}>DECREMENT</button>
                                <button className="btn btn-outline-primary m-2" onClick={() => store.dispatch(mulCount(Number(this.state.input)))}>MULTIPLY</button>
                                <button className="btn btn-outline-primary m-2" onClick={() => store.dispatch(divCount(Number(this.state.input)))}>DIVIDE</button>
                                <button className="btn btn-outline-primary m-2" onClick={() => store.dispatch(remCount(Number(this.state.input)))}>REMAINDER</button>
                                <button className="btn btn-outline-primary m-2" onClick={() => store.dispatch(updByEvenOdd(Number(this.state.input)))}>ASC/DESC</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
