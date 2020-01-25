import React, { Component } from 'react';

export default class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemName : ""
        }
    }
    render(){
      return(
        <div>
            <input  type="text" 
                    value = {this.state.itemName}
                    placeholder = ""
                    onChange = {(e) => this.setState({
                    itemName : e.target.value
                    })}
            />
            <button onClick = {() =>{this.props.add(this.state.itemName)}}>
                ADD
            </button>
        </div>
      )
    }
  }