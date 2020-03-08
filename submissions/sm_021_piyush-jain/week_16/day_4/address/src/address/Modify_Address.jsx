import React from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
class Modify_Address extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "add_id": 0,
            "line_1": ``,
            "line_2": ``,
            "pincode": 0,
            "city": ""
        }
        console.log(props)
    }
    componentDidMount = () => {
        axios.get(`http://127.0.0.1:5000/add/get_user_address/${this.props.match.params.id}/${this.props.match.params.add_id}`)
            .then(res => this.setState({
                id:res.data[0]["id"],
                add_id:res.data[0]["add_id"],
                line_1:res.data[0]["line_1"],
                line_2:res.data[0]["line_2"],
                pincode:res.data[0]["pincode"],
                city:res.data[0]["city"],
            }))
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
        axios.post(`http://127.0.0.1:5000/store_user_address/${this.props.match.params.id}/${this.props.match.params.add_id}`,{"id":this.state.id,"add_id":this.state.add_id,"line_1":this.state.line_1,"line_2":this.state.line_2,"pincode":this.state.pincode,"city":this.state.city})
        .then(alert("Address has been modified successfully"))
        .then(this.props.history.goBack)
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div style={{ "margin": "5% 50% 0% 25%", "width": "50%" }} class="shadow-lg p-3 mb-5 bg-white rounded">
        <h4 style={{ "textAlign": "center" }}>Edit <span style={{ "color": "red" }}>{this.state.add_id} address of {this.state.id} </span>User Details</h4>
                    <div><label>LINE_1:</label><br></br><input type="text" style={{ "width": "100%" }} name="line_1" onChange={this.handleChange} placeholder={this.state.line_1} value={this.state.line_1}></input></div>
                    <div><label>LINE_2:</label><br></br><input type="text" style={{ "width": "100%" }} name="line_2" onChange={this.handleChange} placeholder={this.state.line_2}  value={this.state.line_2}></input></div>
                    <div><label>PINCODE:</label><br></br><input type="text" style={{ "width": "100%" }} name="pincode" onChange={this.handleChange} placeholder={this.state.pincode}  value={this.state.pincode}></input></div>
                    <div><label>CITY:</label><br></br><input type="text" style={{ "width": "100%" }} name="city" onChange={this.handleChange} placeholder={this.state.city}  value={this.state.city}></input></div>
                    <button class="btn btn-warning mt-2" style={{ "marginLeft": "40%" }} onClick={this.handleClick}>Submit</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Modify_Address