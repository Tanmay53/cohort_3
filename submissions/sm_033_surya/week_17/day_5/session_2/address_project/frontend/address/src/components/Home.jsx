import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataAvl: true,
            data: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/listing")
            .then((res) => {
                if (res == null) {
                    this.setState({
                        dataAvl: false
                    })
                }
                else {
                    this.setState({
                        data: res.data
                    })
                }
            })
    }
    deleteuser = (id) => {
        axios.get(`http://localhost:5000/deleteuser/${id}`)
            .then((res) => {
                console.log(res);
                this.setState({
                    data: res.data
                })
            })
    }
    deleteaddress = (id) => {
        axios.get(`http://localhost:5000/deleteaddress/${id}`)
            .then((res) => {
                console.log(res);
                this.setState({
                    data: res.data
                })
            })
    }
    edituser = (id) => {
        axios.get(`http://localhost:5000/user/${id}`)
            .then((res) => {
                console.log(res);
            })
    }
    render() {
        // console.log(this.state.data);
        if (this.state.dataAvl) {
            return (
                <>
                    <div className="container offset-3">
                        <div className="row">
                            {this.state.data.map((ele) => <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12; m-3 p-2 shadow bg-white rounded ">
                                <div className="row">
                                    <div className="col-12 pb-3">
                                        <div className="d-flex justify-content-center"><img src="https://via.placeholder.com/250X250" /></div>
                                        <div className="row mt-2">
                                            <div className="col-9">Name:{ele.name}</div><div className="m-1"><Link to={`/edituser/${ele.id}`}><FontAwesomeIcon icon={faPen}/></Link></div><div className="m-1"><FontAwesomeIcon onClick={() => this.deleteuser(ele.id)} icon={faTrashAlt}/></div></div>
                                        <div>Mobile:{ele.mobile}</div>
                                        <div>Email:{ele.email}</div>
                                    </div>
                                    {ele.isaddress == "Yes" ? <div className="col-12">
                                        <div className="row"> <div className="col-9">AddressL1:{ele.address1}</div><div className="m-1"><Link to={`editaddress/${ele.id}`}><FontAwesomeIcon icon={faPen}/></Link></div><div className="m-1"><FontAwesomeIcon onClick={() => this.deleteaddress(ele.addressid)} icon={faTrashAlt} /></div></div>
                                        <div>AdderessL2:{ele.address2}</div>
                                        <div>Pincode:{ele.pincode}</div>
                                    </div> : <div className="col-12 text-center"> <Link to={`/addaddress/${ele.id}`}><button className="btn btn-warning">ADD address</button></Link></div>}
                                </div>
                            </div>)}
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <div>No data</div>
            )
        }
    }
}
