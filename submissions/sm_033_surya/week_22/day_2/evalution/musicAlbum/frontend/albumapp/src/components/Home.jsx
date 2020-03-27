import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datalist: [],
            sorted: true,
            artist: "",
            count: "10",
            offset: "0"
        }
    }
    componentDidMount = () => {
        this.getdata()
    }

    getdata = () => {
        axios({
            method: "GET",
            url: 'http://localhost:5000/datalist/getdata',
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                this.setState({
                    datalist: res.data
                })
            })
    }
    deletealbum = (id) => {
        axios({
            method: "GET",
            url: `http://localhost:5000/datalist/deletealbum/${id}`,
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                console.log(res)
                this.getdata()
            })
            .catch((res) => {
                console.log(res)
            })

    }
    sortdata = () => {
        this.setState({
            sorted: !this.state.sorted
        })
        let temp = this.state.datalist
        if (this.state.sorted) {
            temp.sort((a, b) => Number(a.rel_year) - Number(b.rel_year))
            this.setState({
                datalist: temp
            })
        }
        else {
            let temp = this.state.datalist
            temp.sort((a, b) => Number(b.rel_year) - Number(a.rel_year))
            this.setState({
                datalist: temp
            })
        }
    }
    handlechange = (e) => {
        this.setState({
            artist: e.target.value
        })
    }
    handleclick = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/datalist/getdata',
            data: {
                content: this.state.artist
            },
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                this.setState({
                    datalist: res.data
                })
            })
    }
    render() {
        console.log(this.state)
        if (this.props.value.login) {
            return (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10">
                                <input className="col-12 form-control" onChange={this.handlechange} placeholder="Please search by Artist name" value={this.state.artist} />
                            </div>
                            <div className="col-2" >
                                <button className="btn btn-success" onClick={this.handleclick}> Search</button>

                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 text-center mt-sm-2 mt-md-2 mt-lg-0 mt-xl-0">
                                <button className="btn btn-warning" onClick={this.sortdata}>Sort By Year</button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Sl.no</th>
                                        <th>Artist</th>
                                        <th>Albums</th>
                                        <th>Year</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                {this.state.datalist.map((ele, index) => <tr>
                                    <td>{index + 1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.album_name}</td>
                                    <td>{ele.rel_year}</td>
                                    <td><Link to={`/edit/${ele.id}`} ><button className="btn btn-warning">Edit</button></Link></td>
                                    <td><button className="btn btn-danger" onClick={() => this.deletealbum(ele.id)}>Delete</button></td>
                                </tr>)}
                            </table>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    value: state.loginreducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
