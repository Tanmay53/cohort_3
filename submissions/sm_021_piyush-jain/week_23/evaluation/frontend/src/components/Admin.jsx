import React, { Component } from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { login, logout, page, perPage, activePage } from "../redux/action"
import Pagination from "./Pagination"

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            country: "",
            city: "",
            population: 0,
            income: 0,
            pageData: [],
            pageNo: 0
        }
    }

    componentDidMount = () => {
        this.getCountries()
        this.pagination()
    }

    // function calling for pagination
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
            .then(async(res)=> {
                await  this.props.page(res.data.curr_page_items)
                this.setState({
                    pageNo: res.data.total_pages
                })
            })
    }
    // to get all distinct countries
    getCountries = () => {
        const { token } = this.props
        axios({
            method: "GET",
            url: "http://127.0.0.1:5000/getCountries",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    countries: res.data
                })
            })
    }
// set the input values
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // function to add a new city
    handleStat = () => {
        const { token } = this.props
        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/addCity",
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                country: this.state.country,
                city: this.state.city,
                population: this.state.population,
                income: this.state.income,
            }
        })
            .then(res => {
                alert("Stats of the city have been added")
                this.pagination()
            })
    }


    handleClick = () => {
        const { token } = this.props
        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/addCountry",
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                country: this.state.country
            }
        })
            .then(res => { this.getCountries() })
    }


    // set per page data value
    handlePerPage = async (e) => {
        this.props.perPage(e.target.value)
       setTimeout(()=>this.pagination(),1000)
    }

    changeActive = (val) => {
        // this.props.activePage(val)
        setTimeout(()=>this.pagination(),1000)
    }

    render() {
        var array = []
        array.push(<ul class="pagination ml-5"></ul>)
        for (var i = 0; i <= this.state.pageNo; i++) {
            if(this.props.activePage==i+1)
            {
                array.push(<li class="page-item list-inline-item border border-secondary bg-dark text-white p-2" onClick={()=>this.changeActive(i+1 )}>{i + 1}</li>)
            }
            else
            {
                array.push(<li class="page-item list-inline-item border border-primary p-2" onClick={()=>this.changeActive(i+1 )}>{i + 1}</li>)
        }
        }
        array.push(<ul class="pagination"></ul>)
        console.log(this.state)



        if (this.props.token && this.props.personType == "admin") {
            return (
                <React.Fragment>
                    <h1 class="text-center mt-5">WELCOME BACK ADMIN</h1>
                    <h3 class="text-center my-3">Wanna add new info ? ?</h3>
                    <div class="d-flex justify-content-center">
                        <select>
                            <option value="All">ALL</option>
                            {this.state.countries.map((item, index) =>
                                <option value={item.name} key={item.id}>{item.name}</option>
                            )}
                            )
                        </select>
                        <input type="text" name="country" placeholder="Add a new Country" onChange={this.handleChange}></input>
                        <button onClick={this.handleClick} class="btn btn-outline-warning">ADD</button>
                    </div>
                    <h4 class="text-center my-3">Add new info for a City/Country?</h4>
                    <div>
                        <div  class="d-flex justify-content-center">
                            <select onChange={this.handleChange} name="country">
                                <option value="All">ALL</option>
                                {this.state.countries.map((item, index) =>
                                    <option value={item.name} key={item.id}>{item.name}</option>
                                )}
                            )
                        </select>
                        </div>
                            <div  class="d-flex justify-content-center"><input type="text" name="city" placeholder="Add a new city" onChange={this.handleChange}></input></div>
                            <div  class="d-flex justify-content-center"><input type="text" name="population" placeholder="Enter Population" onChange={this.handleChange}></input></div>
                            <div  class="d-flex justify-content-center"><input type="text" name="income" placeholder="Add average income" onChange={this.handleChange}></input></div>
                            <div  class="d-flex justify-content-center"><button onClick={this.handleStat} class="btn btn-outline-warning">Add stats</button></div>
                        </div>
            
                    <select onChange={this.handlePerPage}>
                        <option>Choose Per Page</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                    <Pagination ></Pagination>
                    {array}
                </React.Fragment>
            )
        }
        else if (this.props.token && this.props.personType == "user") {
            return (
                <React.Fragment>
                    <Redirect to="/user"></Redirect>
                </React.Fragment>
            )
        }
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
    token: state.token,
    personType: state.personType,
    activePage: state.activePage,
    dataPerPage: state.dataPerPage
})

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        page: (payload) => dispatch(page(payload)),
        perPage: (payload) => dispatch(perPage(payload)),
        // activePage: (payload) => dispatch(activePage(payload))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)