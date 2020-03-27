import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export class Adddetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumtitle: "",
            relyear: "",
            artist: "",
            artistid: "",
            artistdata: []
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount = () => {
        axios({
            method: "GET",
            url: 'http://localhost:5000/data/artistlist',
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                this.setState({
                    artistdata: res.data
                })
            })
    }

    addartist = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/data/artist',
            data: {
                artist: this.state.artist
            },

            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                alert("successfully added")
                axios({
                    method: "GET",
                    url: 'http://localhost:5000/data/artistlist',
                    headers: {
                        'Authorization': this.props.value.token
                    }
                })
                    .then((res) => {
                        this.setState({
                            artistdata: res.data
                        })
                    })
            })
            .catch((res) => {
                console.log(res)
            })
    }

    addalbum = () => {
        let temp = {
            artistid: this.state.artistid,
            albumtitle: this.state.albumtitle,
            relyear: this.state.relyear
        }
        axios({
            method: 'POST',
            url: 'http://localhost:5000/data/albums',
            data: temp,
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                alert("successfully added")
                this.props.history.push("/")
            })
            .catch((res) => {
                console.log(res)
            })
    }

    render() {
        console.log(this.state)
        if (this.props.value.login) {
            return (
                <>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12">
                                <div className="col-12">
                                    <label>Artist</label>
                                </div>
                                <div className="col-12">
                                    <input className="col-12 form-control" name="artist" placeholder="Enter ArtistName" value={this.state.artist} type="text" onChange={this.handleChange} />
                                </div>
                                <div className="col-12 mt-2 text-center">
                                    <button className="btn btn-primary" onClick={this.addartist}>Add</button>
                                </div>




                                <div className="col-12">
                                    <label>Select Artist</label>
                                </div>
                                <div className="col-12 text-center">
                                    <select className="btn btn-primary" onChange={this.handleChange} name="artistid" value={this.state.artistid}>
                                        <option>Choose Artist</option>
                                        {this.state.artistdata.map((ele) => <option value={ele.id}>{ele.name}</option>)}
                                    </select>
                                </div>


                                <div className="col-12">
                                    <label>Album title</label>
                                </div>
                                <div className="col-12">
                                    <input className="col-12 form-control" name="albumtitle" placeholder="Enter Albumname" value={this.state.albumtitle} type="text" onChange={this.handleChange} />
                                </div>
                                <div className="col-12">
                                    <label>Release year</label>
                                </div>
                                <div className="col-12">
                                    <input className="col-12 form-control" type="text" name="relyear" placeholder="Enter Releaseyear" value={this.state.relyear} onChange={this.handleChange} />
                                </div>
                                <div className="col-12 mt-2 text-center">
                                    <button className="btn btn-primary" onClick={this.addalbum}>Save</button>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Adddetails)
