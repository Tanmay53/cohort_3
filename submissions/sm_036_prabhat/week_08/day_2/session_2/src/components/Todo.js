import React, { Component } from 'react'

export default class Todo extends Component {

    render() {
        // console.log(this.props.data)
        if (this.props.data.length === 0) {
            return (<div className="text-center mt-5 h2 text-success">Add Items</div>)
        }
        else {
            return (
                <div>
                    <div className="text-center m-4 h2 text-success">Added Item List</div>
                    <div className="d-flex justify-content-center">
                        <div style={{ width: "28rem" }} className="card shadow-lg">{this.props.data.map((item, index) => (
                            <div key={item.name + index} className="p-4 bg bg-dark m-2">
                                <input onClick={() => { this.props.check(index) }} type="checkbox" className="form-check-input ml-3"></input>
                                <div className="d-flex justify-content-between">
                                    <label style={item.isDone ? { "color": "green", "textDecoration": "line-through" } : { "color": "white", "textDecoration": "none" }} className="form-check-label ml-5 ">{item.name}</label>
                                    <img onClick={() => { this.props.del(index) }} src="https://img.icons8.com/flat_round/30/000000/delete-sign.png" alt="Del"></img>
                                </div>
                            </div>
                        ))}</div>
                    </div>
                </div>
            )
        }
    }
}