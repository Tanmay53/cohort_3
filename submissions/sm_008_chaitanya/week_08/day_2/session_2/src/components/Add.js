import React, { Component } from 'react'

export class Add extends Component {
    constructor(props){
        super(props)
        this.state={
            itemName:''
        }
    }
    render() {
        return (
            <div className="d-flex pl-5">
                <input type="text"
                        value={this.state.itemName}
                        onChange={(e)=>this.setState({itemName:e.target.value})}className="form-control"/>
                <button onClick={()=>this.props.add(this.state.itemName)} className="bg-primary text-light">Add</button>
            </div>
        )
    }
}

export default Add