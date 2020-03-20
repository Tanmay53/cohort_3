import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { login, logout } from "../redux/action"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [],
            city: "",
            source: "",
            destination: "",
            available: 0,
            bus_no: "",
            schedule: "",
            table: []
        }
    }

    //call to set initial state
    componentDidMount = async () => {
        var token = this.props.token
        await axios({
            method: "GET",
            url: "http://127.0.0.1:5000/getCities",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    cities: res.data
                })
            })

        await axios({
            method: "GET",
            url: "http://127.0.0.1:5000/getTable",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    table: res.data
                })
            })

    }

    // getting the new city name
    addCity = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // adding a new city in option 
    addingCity = async () => {
        var token = this.props.token
        await axios({
            method: "POST",
            url: "http://127.0.0.1:5000/addCity",
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                city: this.state.city
            }
        })
            .then(res => {
                alert("City has been Added")
                axios({
                    method: "GET",
                    url: "http://127.0.0.1:5000/getCities",
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                    .then(res => {
                        console.log(res)
                        this.setState({
                            cities: res.data
                        })
                    })



            })
    }


    // choose the source
    source = (e) => {
        this.setState({
            source: e.target.value
        })
    }

    // choose the destination
    destination = (e) => {
        this.setState({
            destination: e.target.value
        })
    }


    // adding a new bus 
    addBus = async () => {
        var token = this.props.token
        await axios({
            method: "POST",
            url: "http://127.0.0.1:5000/addBus",
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                source: this.state.source,
                destination: this.state.destination,
                number: this.state.bus_no,
                schedule: this.state.schedule
            }
        })
            .then(res => {
                alert("Bus Route has been added successfully")
                axios({
                    method: "GET",
                    url: "http://127.0.0.1:5000/getTable",
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                    .then(res => {
                        console.log(res)
                        this.setState({
                            table: res.data
                        })
                    })
            })
    }

    // changing the input fields
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // function to delete a bus with all it's routes
    handleDelete = async (idx, bus_id) => {
        var token = this.props.token

        await axios({
            method: "GET",
            url: `http://127.0.0.1:5000/deleteBus/${idx}/${bus_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                alert("Bus has been Deleted")
                axios({
                    method: "GET",
                    url: "http://127.0.0.1:5000/getTable",
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                    .then(res => {
                        console.log(res)
                        this.setState({
                            table: res.data
                        })
                    })
            })
    }

    render() {
        console.log(this.state)
        if (this.props.token && this.props.person == "admin") {
            return (
                <React.Fragment>
                    <h2 class="text-center text-danger my-5">Welcome Back Admin !!</h2>
                    <div class="d-flex justify-content-center">
                        <h6 class="text-info mt-2 mx-2"> Wanna add City?</h6>
                        <input type="text" placeholder="Then type-in here" name="city" onChange={this.addCity} class="border border-danger mx-2 rounded" />
                        <button onClick={this.addingCity} class="btn btn-success">Add</button>
                    </div>

                    <div class="d-flex justify-content-center my-5 ml-5">
                        <div>

                            <div class="d-flex justify-content-center my-2"><select onChange={this.source}>
                                <option>Source</option>
                                {this.state.cities.map((element, index) =>
                                    <option key={index} value={element.name}>{element.name}</option>
                                )}
                            </select>
                                <select onChange={this.destination}>
                                    <option>Destination</option>
                                    {this.state.cities.map((element, index) =>
                                        <option key={index} value={element.name}>{element.name}</option>
                                    )}
                                </select>
                            </div>
                            <div class="d-flex justify-content-center my-2"><input type="text" placeholder="Bus_NO" name="bus_no" onChange={this.handleChange} class="border border-danger rounded" /></div>
                            <div class="d-flex justify-content-center my-2"><input type="text" placeholder="Time" name="schedule" onChange={this.handleChange} class="border border-danger rounded" /></div>
                            <div class="d-flex justify-content-center my-2"><button onClick={this.addBus} class="btn btn-success">Add Bus</button></div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th >SI.NO</th>
                                    <th >Source</th>
                                    <th >Destination</th>
                                    <th >Bus_No</th>
                                    <th >Schedule</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.table.map((item, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.source}</td>
                                        <td>{item.destination}</td>
                                        <td>{item.bus_no}</td>
                                        <td>{item.schedule}</td>
                                        <td><button class="btn btn-outline-warning"><Link to={`/edit/${item.id}/${item.bus_id}`} style={{ "textDecoration": "none" }} class="text-dark">Edit</Link></button></td>
                                        <td><button onClick={() => this.handleDelete(item.id, item.bus_id)} class="btn btn-outline-danger text-dark">Delete</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)
