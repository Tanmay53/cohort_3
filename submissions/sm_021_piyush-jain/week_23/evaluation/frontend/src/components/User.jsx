import React, { Component } from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { login, logout,page } from "../redux/action"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageData: []
        }
    }
    
componentDidMount=()=>{
    this.pagination()
}

pagination = async () => {
    const { token } = this.props
    await axios({
        method: "POST",
        url: "http://127.0.0.1:5000/pagination",
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            activePage: this.props.activePage,
            dataPerPage: this.props.dataPerPage,
        }
    })
        .then(res => {
            this.setState({
                pageData:res.data.curr_page_items
            })
            this.setState({
                pageNo: res.data.total_pages
            })
        })
}

// function to filter data based on populatiom
handlePopulation=async(e)=>{
    var {token}=this.props
    await axios({
        method: "GET",
        url: `http://127.0.0.1:5000/user/population/${e.target.value}`,
        headers: { 'Authorization': `Bearer ${token}` },
    })
    .then(res=>{
        this.setState({
            pageData:res.data
        })
    })
}

// function to filter data based on income
handleIncome=async(e)=>{
    var {token}=this.props
    await axios({
        method: "GET",
        url: `http://127.0.0.1:5000/user/income/${e.target.value}`,
        headers: { 'Authorization': `Bearer ${token}` },
    })
    .then(res=>{
        console.log(res)
        this.setState({
            pageData:res.data
        })
    })
}

    render() {
        console.log(this.state)
        if (this.props.token && this.props.personType == "admin") {
            return (
                <React.Fragment>
                    <Redirect to="/admin"></Redirect>
                    hello
                </React.Fragment>
            )
        }
        else if (this.props.token && this.props.personType == "user") {
            return (
                <React.Fragment>
                    <div class="m-5">
                    <select onChange={this.handlePopulation}>
                        <option value="All">Choose Population</option>
                        <option value="10000">10000</option>
                        <option value="200000">200000</option>
                        <option value="3000000">3000000</option>
                        <option value="40000000">40000000</option>
                    </select>
                    <select onChange={this.handleIncome}>
                        <option value="All">Choose Income</option>
                        <option value="10000">10000</option>
                        <option value="20000">20000</option>
                        <option value="30000">30000</option>
                        <option value="40000">40000</option>
                    </select>
                    </div>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>SI.NO</th>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th>Population</th>
                                    <th>Income</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.pageData && this.state.pageData.map((item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.country}</td>
                                        <td>{item.city}</td>
                                        <td>{item.population}</td>
                                        <td>{item.income}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </React.Fragment>
            )

        } 

}
}
const mapStateToProps = (state) => ({
    token: state.token,
    personType:state.personType,
    pageData:state.pageData,
    dataPerPage:state.dataPerPage,
    activePage:state.activePage
})


const mapDispatchToProps = dispatch => {
    return ({
       logout : () => dispatch(logout()),
       page: (payload) => dispatch(page(payload)),

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(User)