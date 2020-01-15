import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: ""
        }
    }

    inputData = (e) => {
        e.preventDefault()
        this.setState({
            itemName: e.target.value
        })
    }

    render() {
        console.log(this.state.itemName)
        return (
            <div className="container">
                <div className="display-4 text-center p-4">To Do App</div>
                <div className="d-flex justify-content-center">
                    <div>
                        <input value={this.state.itemName} onChange={this.inputData} type="text" className="px-5 py-2" placeholder="Enter Task to Add" required></input>
                        <button  onClick={() => this.props.add(this.state.itemName)} className='h5 py-2 px-4 ml-3'>+</button>
                    </div>
                </div>
            </div>
        )
    }
}