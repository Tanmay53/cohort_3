import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { login, logout } from "../redux/action"
class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            table: [],
            source: [],
            destination: [],
            count: 0
        }
    }
    //call to set initial state
    componentDidMount = async () => {
        var token = this.props.token
        await axios({
            method: "GET",
            url: "http://127.0.0.1:5000/user/getSource",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    source: res.data
                })
            })


        await axios({
            method: "GET",
            url: "http://127.0.0.1:5000/getPageCount",
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(res => {
            console.log(res)
            this.setState({
                count: res.data
            })
        })

        await axios({
            method: "GET",
            url: "http://127.0.0.1:5000/user/getDestination",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    destination: res.data
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



        // await axios({
        //     method: "GET",
        //     url: "http://127.0.0.1:5000/pagination",
        //     headers: { 'Authorization': `Bearer ${token}` }
        // })
        //     .then(res => {
        //         console.log(res)
        //         this.setState({
        //             table: res.data
        //         })
        //     })

    }

    source = async (e) => {
        var token = this.props.token
        await axios({
            method: "GET",
            url: `http://127.0.0.1:5000/user/Sources/${e.target.value}`,
            headers: { 'Authorization': `Bearer ${token}` }

        })
            .then(res => {
                console.log(res)
                this.setState({
                    table: res.data
                })
            })
    }

    destination = async (e) => {
        var token = this.props.token
        await axios({
            method: "GET",
            url: `http://127.0.0.1:5000/user/Destination/${e.target.value}`,
            headers: { 'Authorization': `Bearer ${token}` }

        })
            .then(res => {
                console.log(res)
                this.setState({
                    table: res.data
                })
            })
    }

page=async(data)=>{
    var token = this.props.token

    await axios({
        method: "GET",
        url: `http://127.0.0.1:5000/pagination/${data}`,
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(res => {
            console.log(res)
            this.setState({
                table: res.data
            })
        })
}
    render() {

        var pages=[]

        for(var i=0;i<this.state.count+1;i++)
        {
        pages.push(    <li class="page-item list-inline-item border border-danger ml-4" onClick={()=>this.page(i)}>{i+1}</li>)
        }

        console.log(this.state)
        if (this.props.token && this.props.person == "user") {
            return (
                <React.Fragment>
                    <div>
                        <div class="my-5 mx-5">
                            <select onChange={this.source}>
                                <option value="sources">Select Source</option>
                                {this.state.source.map((item, index) =>
                                    <option key={index} value={item.source}>{item.source}</option>
                                )}
                            </select>

                            <select onChange={this.destination}>
                                <option value="destinations">Select Destination</option>
                                {this.state.destination.map((item, index) =>
                                    <option key={index} value={item.destination}>{item.destination}</option>
                                )}
                            </select>
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
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {pages}
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        else if (this.props.token && this.props.person == "admin") {
            return (
                <React.Fragment>
                    <Redirect to="/home"></Redirect>
                </React.Fragment>
            )
        }
        else {
            return (<Redirect to="/register"></Redirect>)
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
export default connect(mapStateToProps, mapDispatchToProps)(User)

