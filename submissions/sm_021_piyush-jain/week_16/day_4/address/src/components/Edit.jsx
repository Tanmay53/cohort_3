import React from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "name": "",
            "number": "",
            "password": "",
            "email": ""
        }
    }
    componentDidMount = async () => {
        await axios.get(`http://127.0.0.1:5000/user/detail/${this.props.match.params.id}`)
            .then(res => this.setState({
                id: res["data"][0]["id"],
                name: res["data"][0]["name"],
                number: res["data"][0]["number"],
                password: res["data"][0]["password"],
                email: res["data"][0]["email"]
            }))
        console.log(this.state)
    }
    handleClick = () => {
        axios.post(`http://127.0.0.1:5000/edit/${this.props.match.params.id}`, { "id": this.state.id, "name": this.state.name, "number": this.state.number, "password": this.state.password, "email": this.state.email })
        .then(res => console.log(res))
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div style={{ "margin": "5% 50% 0% 25%", "width": "50%" }} class="shadow-lg p-3 mb-5 bg-white rounded">
                    <h4 style={{ "textAlign": "center" }}>Edit <span style={{ "color": "red" }}>{this.state.name}'s</span> Details</h4>
                    <div><label>NAME:</label><br></br><input type="text" style={{ "width": "100%" }} name="name" onChange={this.handleChange} placeholder={this.state.name}></input></div>
                    <div><label>EMAIL:</label><br></br><input type="text" style={{ "width": "100%" }} name="email" onChange={this.handleChange} placeholder={this.state.email}></input></div>
                    <div><label>NUMBER:</label><br></br><input type="text" style={{ "width": "100%" }} name="number" onChange={this.handleChange} placeholder={this.state.number}></input></div>
                    <button class="btn btn-warning mt-2" style={{ "marginLeft": "40%" }} onClick={this.handleClick}>Submit</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Edit