import React, { Component } from 'react'
import axios from 'axios'
import {Link } from "react-router-dom"

export default class Editaddress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addressLine1: "",
            addressLine2: "",
            pincode: "",
            goback:false
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/address/updateaddress/${this.props.match.params.id}`)
            .then((res) =>
                this.setState({
                    addressLine1: res.data.address1,
                    addressLine2: res.data.address2,
                    pincode: res.data.pincode
                })
            )
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        let temp = {
            "address1": this.state.addressLine1,
            "address2": this.state.addressLine2,
            "pincode": this.state.pincode
        }
        // console.log(temp);
        axios.post(`http://localhost:5000/address/updateaddress/${this.props.match.params.id}`, temp)
            .then((res) => {
                console.log(res)
            })
            this.setState({
                addressLine1: "",
                addressLine2: "",
                pincode: "",
                goback:true
            })
    }
    render() {
        if(!this.state.goback){
        return (
            <div className="container d-flex justify-content-center">
                    <div className="col-6 p-3">
                <div className="col-12 m-2">
                <label >Address1:</label>
                </div>
                <div className="col-12 m-2">
                <input className="col-12" name="addressLine1" value={this.state.addressLine1} onChange={this.handleChange} />
                </div>
                <div className="col-12 m-2">
                <label >Address2:</label>
                </div>
                <div className="col-12 m-2">
                    <input className="col-12" name="addressLine2" value={this.state.addressLine2} onChange={this.handleChange} />
                </div>
                <div className="col-12 m-2">
                <label >PinCode</label>
                </div>
                <div className="col-12 m-2">
                    <input className="col-12" name="pincode" value={this.state.pincode} onChange={this.handleChange} />
                </div>
                <div className="col-12 text-center m-2">
                <button onClick={this.handleClick}>Update</button>
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
