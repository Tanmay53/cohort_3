import React, { Component } from 'react'
import axios from 'axios'
class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "name": "",
            "age": 0,
            "email": "",
            "mobile": 0,
            "options": []
        }
    }
    componentDidMount = () => {
        axios.get("http://127.0.0.1:5000/options")
            .then(res => this.setState({
                options: res.data
            }))
        axios.get("http://127.0.0.1:5000/create")
            .then(res => this.setState({
                id: res.data
            }))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            id:this.state.id+1
        })
        axios.post("http://127.0.0.1:5000/create", { "name": this.state.name, "age": this.state.age, "email": this.state.email, "mobile": this.state.mobile, "id": this.state.id })
            .then(res => console.log(res))
    }
    render() {
        console.log(this.state)
        return (
            <>
                <div>
                    <input type="text" placeholder="Enter your Name" name="name" onChange={this.handleChange} />
                    <select name="age" onChange={this.handleChange}>
                        <option>Select Age</option>
                        {this.state.options.map(ele => <option value={ele}>{ele}</option>)}
                    </select>
                    <input type="text" placeholder="Enter your Email" name="email" onChange={this.handleChange} />
                    <input type="text" placeholder="Enter your Mobile" name="mobile" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </>
        )
    }
}
export default Create
