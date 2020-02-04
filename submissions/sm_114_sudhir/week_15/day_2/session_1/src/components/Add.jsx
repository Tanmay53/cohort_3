import React, { Component } from 'react'
import axios from 'axios'

export default class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item : "",
            quantity : "",
        }
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name] : e.target.value 
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:5000/create', {...this.state})
        .then(res => console.log(res))

    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-4 m-auto border border-secondary rounded p-3">
                        <form onSubmit={this.onSubmit}>
                            <lable>Item Name</lable>
                            <input className="form-control" 
                                   placeholder="Enter Item name here..."
                                   onChange={this.handleChange} 
                                   name="item" />
                            <lable>Quantity</lable>
                            <input className="form-control" 
                                   placeholder="Enter Item quantity here..." 
                                   onChange={this.handleChange}
                                   name="quantity" />

                            <button type="submit" className="btn bg-primary mt-2">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
    
