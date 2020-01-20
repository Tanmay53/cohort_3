import React, { Component } from 'react'
import "./Buttons.css"

export default class Button extends Component {
    render() {
        return (
            <div className="m-2 p-2 ">
           <button className={this.props.color} >{this.props.label} </button>
           </div>
        )
    }
}
