import axios from "axios"
import React from 'react'
import { Link } from "react-router-dom"

class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "add_id": 1,
            "name": "",
            "email": "",
            "password": "",
            "number": 0,
            "line_1": "",
            "line_2": "",
            "pincode": 0,
            "city": ""
        }
    }
    componentDidMount = async () => {
        await axios.get("http://127.0.0.1:5000/count")
            .then(res => {
                this.setState({
                    id: Number(res.data) + 1
                })
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        this.setState({
            id: Number(this.state.id) + 1
        })
        e.preventDefault()
        axios.post("http://127.0.0.1:5000/user/create", { "name": this.state.name, "id": this.state.id, "email": this.state.email, "password": this.state.password, "number": this.state.number })
        axios.post("http://127.0.0.1:5000/add/create_address", { "line_1": this.state.line_1, "add_id": this.state.add_id, "id": this.state.id, "line_2": this.state.line_2, "pincode": this.state.pincode, "city": this.state.city })
        axios.post("http://127.0.0.1:5000/count", { "count": this.state.id })
            .then(alert("Created a new user !!"))
            .then(this.props.history.goBack)
    }
    render() {
        return (
            <React.Fragment>
                <form style={{ "width": "50%", "marginLeft": "25%", "marginTop": "3%", "padding": "1%", "border": "1px solid teal", "color": "white", "backgroundColor": "black" }} class="shadow-lg p-3 mb-5 bg-white rounded">
                    <h3 style={{ "textAlign": "center", "color": "Tomato" }} class="m-3">Create a new User</h3>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" onChange={this.handleChange} placeholder="Enter name" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={this.handleChange} placeholder="Enter email" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" onChange={this.handleChange} placeholder="Password" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Number</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="number" onChange={this.handleChange} placeholder="Number" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Line_1</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="line_1" onChange={this.handleChange} placeholder="House No, street" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Line_2</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="line_2" onChange={this.handleChange} placeholder="block ,area" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">City</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="city" onChange={this.handleChange} placeholder="City" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Pincode</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="pincode" onChange={this.handleChange} placeholder="Pincode" required />
                    </div>
                    <div class="d-flex justify-content-center"><button class="btn btn-success" onClick={this.handleClick}>Create</button></div>
                </form>
            </React.Fragment>
        )
    }
}

export default Create