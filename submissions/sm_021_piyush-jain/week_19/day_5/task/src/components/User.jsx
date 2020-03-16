import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            image: null
        }
    }
    componentDidMount = () => {
        var token = this.props.token
        axios({
            method: 'get',
            url: "http://127.0.0.1:5000/user",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                user: res.data[0]
            }))
    }
    handleChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }
    handleClick = () => {
        var token = this.props.token
        let file = this.state.image
        let formdata = new FormData()
        formdata.append('image', file)
        axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/auth/userProfile`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: formdata
        })
            .then((res) =>
                axios({
                    method: 'get',
                    url: "http://127.0.0.1:5000/user",
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                    .then(res => this.setState({
                        user: res.data[0]
                    }))
            )
    }
    render() {
        console.log(this.state.user)
        if (this.props.token) {
            return (
                <React.Fragment>
                    <div style={{ "marginTop": "5%" }}>
                        <div class="d-flex justify-content-center"><img src={`http://127.0.0.1:5000/static/${this.state.user.image}`} class="rounded-circle align-items-center" style={{ "height": "150px", "width": "150px" }}></img></div>
                        <div class="d-flex justify-content-center mt-5 ">
                            <div>
                                <div class="clearfix ">
                                    <div class="float-left"><input type="file" name="file" onChange={(e) => this.handleChange(e)}></input><button onClick={this.handleClick} class="btn btn-danger">ADD</button></div>
                                </div>
                                <div class="clearfix mt-3">
                                    <div class="float-left mr-5 lead">Name</div>
                                    <div class="float-right ml-3 lead">{this.state.user.name}</div>
                                </div>
                                <div class="clearfix mt-3">
                                    <div class="float-left mr-5 lead">Email</div>
                                    <div class="float-right ml-3 lead">{this.state.user.email}</div>
                                </div>
                                <div class="clearfix mt-3">
                                    <div class="float-left mr-5 lead">Phone</div>
                                    <div class="float-right ml-3 lead">{this.state.user.phone}</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
    token: state.token
})

export default connect(mapStateToProps)(User)

