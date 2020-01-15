import React, { Component } from 'react'

export default class Completed extends Component {
    render() {
        console.log(this.props.data)
        const completed = this.props.data.filter((item, index) => {
            return item.isDone === true;
        })
        console.log(completed)

        return (
            <div>
                <div className="text-center mt-2 h2 text-success">Completed Item</div>
                <div className="d-flex justify-content-center">
                    <div style={{ width: "28rem" }} className="card shadow-lg">{completed.map((item, index) => (
                        <div key={item.name + index} className="p-4 bg bg-dark m-2">
                            <div className="d-flex justify-content-between text-white">
                                <div>
                                    {index + 1}
                                    <label style={item.isDone ? { "color": "green", "textDecoration": "line-through" } : { "color": "white", "textDecoration": "none" }} className="form-check-label ml-4">{item.name}</label>
                                </div>
                                <img onClick={() => { this.props.del(index) }} src="https://img.icons8.com/flat_round/30/000000/delete-sign.png" alt="Del"></img>
                            </div>
                        </div>
                    ))}</div>
                </div>
            </div>
        )
    }
}