import React, { Component } from 'react'
import axios from "axios"
class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "name": "",
            "age": "",
            "email": "",
            "mobile": ""
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
    }
    render() {
        return (
            <div>
                <input type="text"disabled value={this.state.id}/>
                <input type="text"disabled value={this.state.name}/>
                <input type="text"disabled value={this.state.age}/>
                <input type="text"disabled value={this.state.email}/>
                <input type="text"disabled value={this.state.mobile}/>
            </div>
        )
    }
}
export default Show