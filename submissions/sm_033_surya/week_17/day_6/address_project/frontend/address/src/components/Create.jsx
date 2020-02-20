import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            mobile: "",
            email: "",
            addressLine1: "",
            addressLine2: "",
            pincode: "",
            goback:false

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        let temp = {
            "name": this.state.name,
            "mobile": this.state.mobile,
            "email": this.state.email
        }
        axios.post("http://localhost:5000/create", temp)
            .then((res) => {
                console.log(res)
            })
            this.setState ({
                name: "",
            mobile: "",
            email: "",
            addressLine1: "",
            addressLine2: "",
            pincode: "",
            goback:true
            })
    }
    render() {
        console.log(this.state)
        if (!this.state.goback){
        return (
            <div>
                    <div className="container">
                    <div className = "col-6 offset-3">
                    <div className="col-12 m-2">
                    <label>name:</label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="col-12" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                    <div className="col-12 m-2">
                    <label>mobile </label>
                    </div>
                    <div className="col-12 m-2">
                        <input  className="col-12" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                    </div>
                    <div className="col-12 m-2">
                    <label >email </label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="col-12" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    <div className="col-12 m-2 text-center">
                    <button onClick={this.handleClick}>SUBMIT</button>
                    </div>
                    </div>
                    </div>
            </div>
        )
        }
        else {
            return(
                <div className="container text-center">
                <Link to="/">Go to HOME </Link>
                </div>
            )
        }
    }
}
export default Create