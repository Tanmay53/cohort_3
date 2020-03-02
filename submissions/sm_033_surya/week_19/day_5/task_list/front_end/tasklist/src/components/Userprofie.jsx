import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export class Userprofie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: 'http://localhost:5000/profile/user',
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                this.setState({
                    user: res.data[0]
                })
            })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12"><h1>{this.state.user.username}</h1></div>
                    <div className="col-12"><h2>{this.state.user.email}</h2></div>
                    <div className="col-12">{this.state.user.mobile}</div>
                </div>
                profile
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.loginreducer

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Userprofie)
