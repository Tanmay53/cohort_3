import React from "react"
import { Switch, Link, Route } from "react-router-dom"
import Admin from "../components/Admin"
import Edit from "../components/Edit"
import NotFound from "../components/NotFound"
import Registration from "../components/Registration"
import User from "../components/User"
import { connect } from 'react-redux'
import axios from "axios"
import {signUp,logout} from "../redux/action"

class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }
    Logout = () => {
        this.setState({
            name: ""
        })
        this.props.logout()
    }
    componentDidMount =() => {
        // var token = this.props.token
        const {token} = this.props
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/auth/getName`,
            headers: { 'Authorization': `Bearer ${token}` },
        })
        .then(res => this.setState({
            name: res.data[0]["name"]
        }))
        .catch(err => console.log(err))
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <nav class="navbar navbar-dark bg-dark">
                    <div><button class="btn btn-outline-primary"><Link to="/home" style={{ "color": "white", "textDecoration": "none" }}><h6>{this.state.name}</h6></Link></button></div>
                    <h6 style={{ "color": "white" }}><Link to="/register" style={{ "color": "white", "textDecoration": "none" }}><span class=" lead">Statistics</span></Link></h6>
                    <div>
                        {this.props.token && <button class="btn btn-outline-danger ml-2" onClick={this.Logout} style={{"color":"white"}}>Logout</button>}
                    </div>
                </nav>
                <Switch>
                    <Route path="/admin" render={(props)=><Admin {...props}/>}></Route>
                    <Route path="/edit/:id/:stat_id" exact render={(props) => <Edit {...props} />}></Route>
                    <Route path="/register" exact render={(props) => <Registration {...props} />}></Route>
                    <Route path="/user" exact render={(props) => <User {...props} />}></Route>
                    <Route path component={NotFound} />
                </Switch>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    token: state.token,
})

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Routes)