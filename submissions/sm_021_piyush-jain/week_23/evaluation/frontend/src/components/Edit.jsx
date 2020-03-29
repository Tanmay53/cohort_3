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
            population: "",
            income: "",
        }
    }
    //call to set initial state
    componentDidMount = async () => {
        var token = this.props.token
        await axios({
            method: "GET",
            url: `http://127.0.0.1:5000/getStatDetails/${this.props.match.params.id}/${this.props.match.params.stat_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    detail: res.data[0],
                    population: res.data[0]["population"],
                    income: res.data[0]["income"]
                })
            })

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleUpdate = async () => {
        const {token}= this.props

        await axios({
            method: "POST",
            url: `http://127.0.0.1:5000/updateStatDetails/${this.props.match.params.id}/${this.props.match.params.stat_id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                population: this.state.population,
                income: this.state.income
            }
        })
        .then(alert("Stats has been Updated"))
            .then(this.props.history.goBack)
    }


    render() {
        console.log(this.state)
        if (this.props.token && this.props.personType=="admin") {
            return (
                <React.Fragment>
                    <div class="d-flex justify-content-center my-5 ml-5 ">
                        <div  style={{"width":"40%"}} class="shadow p-3 mb-5 bg-white rounded">
                            <h4 class="text-center">Update the city details</h4>
                            <div class="mt-3">population</div>
                            <div><input type="text" name="population" placeholder={this.state.detail.population} onChange={this.handleChange}   class="border border-danger rounded my-2" style={{"width":"100%"}}/></div>
                            <div>Income</div>
                            <div><input type="text" name="income" placeholder={this.state.detail.income} onChange={this.handleChange}   class="border border-danger rounded my-2" style={{"width":"100%"}}/></div>
                            <div class="d-flex justify-content-center ml-5"><button onClick={this.handleUpdate} class="btn btn-warning">Update</button></div>
                        </div>
                    </div>

                </React.Fragment>
            )
        }
        else if (this.props.token && this.props.personType=="user") {
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
    personType:state.personType

})

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
