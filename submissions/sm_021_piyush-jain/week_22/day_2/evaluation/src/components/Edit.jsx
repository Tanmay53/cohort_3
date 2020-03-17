import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { login, logout } from "../redux/action"

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: [],
            bus_no: "",
            schedule: "",
        }
    }
    //call to set initial state
    componentDidMount = async () => {
        var token = this.props.token
        await axios({
            method: "GET",
            url: `http://127.0.0.1:5000/getBusDetails/${this.props.match.params.id}/${this.props.match.params.bus_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    detail: res.data[0],
                    bus_no: res.data[0]["bus_no"],
                    schedule: res.data[0]["schedule"]
                })
            })

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleUpdate = async () => {
        var token = this.props.token

        await axios({
            method: "POST",
            url: `http://127.0.0.1:5000/updateBusDetails/${this.props.match.params.id}/${this.props.match.params.bus_id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                bus_no: this.state.bus_no,
                schedule: this.state.schedule
            }
        })
            .then(alert("Bus Route has been Updated"))
            .then(this.props.history.goBack)
    }


    render() {
        console.log(this.state)
        if (this.props.token && this.props.person == "admin") {
            return (
                <React.Fragment>
                    <div class="d-flex justify-content-center my-5 ml-5 ">
                        <div style={{ "width": "40%" }} class="shadow p-3 mb-5 bg-white rounded">
                            <h4 class="text-center">Update the bus details</h4>
                            <div class="mt-3">Bus Number</div>
                            <div><input type="text" name="bus_no" placeholder={this.state.detail.bus_no} onChange={this.handleChange} class="border border-danger rounded my-2" style={{ "width": "100%" }} /></div>
                            <div>Schedule</div>
                            <div><input type="text" name="schedule" placeholder={this.state.detail.schedule} onChange={this.handleChange} class="border border-danger rounded my-2" style={{ "width": "100%" }} /></div>
                            <div class="d-flex justify-content-center ml-5"><button onClick={this.handleUpdate} class="btn btn-warning">Update</button></div>
                        </div>
                    </div>

                </React.Fragment>
            )
        }
        else if (this.props.token && this.props.person == "user") {
            return (
                <React.Fragment>
                    <Redirect to="/user"></Redirect>
                </React.Fragment>
            )
        }




        // if he is not logged in, redirect him to sign-in/sign-up page
        else {
            return (

                <React.Fragment>
                    <Redirect to="/register"></Redirect>
                </React.Fragment>
            )

        }
    }
}
const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token,
    person: state.person

})

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
