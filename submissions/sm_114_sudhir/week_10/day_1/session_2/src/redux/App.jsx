import React, { Component } from 'react'
import { store } from '../store'
import {addTodo, toggleItem, deleteItem} from './action'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            input : '',
        }
    }

    render() {
        let listArr = store.getState().todoList
        // console.log(listArr)
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="
                    col-4 m-auto rounded p-3
                    shadow-lg p-3 mb-5 bg-white rounded
                    text-center">
                        <label className="font-weight-bold mb-4">Add Your Todos list</label>
                        <input onChange = {(e) => this.setState({input : e.target.value})} className="form-control" placeholder="Enter todos list" />
                        <div className="text-center">
                            <button onClick = {() => store.dispatch(addTodo({itemName : this.state.input, completed : false}))} className="btn btn-outline-dark my-4">Add Todos</button>
                        </div>
                    </div> 
                </div>
                <div className="row mt-4">
                    {/* todos list */}
                    <div className="
                        col-4 m-auto rounded p-3
                        shadow-lg p-3 mb-5 bg-white rounded
                        text-center">
                            <label className="mb-4">
                                <h3 className="font-weight-bold">Todos List</h3>
                            </label>                    
                        <hr/>
                        <ol className="list-group">
                            {listArr.map(ele => {
                                return (
                                    <li className="list-group-item" key={ele.itemName}>
                                        <input type="checkbox" onClick={() => store.dispatch(toggleItem(ele))} />{ele.itemName}
                                    </li>
                                )
                            })}
                        </ol>    
                    </div> 
                    {/* completed todos */}
                    <div className="
                        col-4 m-auto rounded p-3
                        shadow-lg p-3 mb-5 bg-white rounded
                        text-center">
                            <label className="mb-4">
                                <h3 className="font-weight-bold">Completed Todos</h3>
                            </label>
                            <hr/>
                            <ol>
                                {listArr.map(ele => {
                                    if(ele.completed == true){
                                        return (
                                            <li key={ele.itemName}>
                                                {ele.itemName}
                                                <button onClick={() => store.dispatch(deleteItem(ele))} className="btn btn-danger">X</button>
                                            </li>
                                        )
                                    }
                                })}
                            </ol>
                    </div>
                </div>
            </div>
        )
    }
}

