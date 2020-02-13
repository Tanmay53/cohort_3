import React, { Component } from 'react'

export default class Finalpage extends Component {
    handleClick=()=>{
        this.props.history.push("./")
    }
    render() {
        return (
            <div className="container p-5 text-center">
            <button className="btn btn-warning mb-3" onClick={this.handleClick}>Go to homepage</button>
            <h3>You have successfully booked your meeting room</h3>
            <div className="display-2 text-dark">Thank you </div>
        </div>
        )
    }
}
