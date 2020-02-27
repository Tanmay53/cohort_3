import React, { Component } from 'react'
import axios from "axios"
class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "name": "",
            "age": "",
            "email": "",
            "mobile": "",
            "options": []
        }
    }
    componentDidMount = () => {
        axios.get(`http://127.0.0.1:5000/show/${this.props.match.params.id}`)
            .then(res => this.setState({
                id: this.props.match.params.id,
                name: res.data[0].name,
                age: res.data[0].age,
                email: res.data[0].email,
                mobile: res.data[0].mobile
            }))
            axios.get("http://127.0.0.1:5000/options")
            .then(res => this.setState({
                options: res.data
            }))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=()=>{
        axios.post(`http://127.0.0.1:5000/edit/${this.props.match.params.id}`,{ "name": this.state.name, "age": this.state.age, "email": this.state.email, "mobile": this.state.mobile, "id": this.state.id })
        .then(res=>console.log(res))
    }
    render() {
        return (
            <>
                <div>
                    <input type="text" placeholder={this.state.name} name="name" onChange={this.handleChange} />
                    <select name="age" onChange={this.handleChange}>
                        <option>Select Age</option>
                        {this.state.options.map(ele => <option value={ele}>{ele}</option>)}
                    </select>
                    <input type="text" placeholder={this.state.email} name="email" onChange={this.handleChange} />
                    <input type="text" placeholder={this.state.mobile} name="mobile" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </>
        )
    }
}
export default Edit
