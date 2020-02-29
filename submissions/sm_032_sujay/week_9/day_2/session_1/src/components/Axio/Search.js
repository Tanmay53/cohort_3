import React, { Component } from 'react'
import "./Search.module.css"
import Table from "./Table"
import axios from 'axios'



export default class Search extends Component {

    // var baseUrl = 'https://api.github.com/search/users?q='

    constructor(props) {
        super(props)
        this.state = {
            type: "",
            searchData: "",
            progLang: "",
            userData: [],
        }
    }

    handleChange = (e) => {
        console.log("Hnadle Change called")
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            searchData: this.state.searchData,
            progLang: this.state.progLang,
            type: this.state.type
        }
        this.setState({
            userData: [...this.state.userData, obj]
        })


        axios.get(`https://api.github.com/search/users?q=${this.state.searchData}`)
            .then(response => {
                //console.log("response is",response)
                this.setState({ data: response.data.items })
                // console.log(this.state.data)/
            })
            .catch((error) => {
                console.log(error);
            });

        this.setState({
            type: "",
            searchData: "",
            progLang: "",
        })

    }

    render() {
        console.log("State", this.state)

        return (
            <div>
                <div className="container">
                    <div className="col-8 offset-2 shadow border rounded my-5">

                        <form className="form-inline my-5 offset-2">

                            <select className="mx-2" name="type" value={this.state.name} onChange={this.handleChange}>
                                <option value="">Choose</option>
                                <option value="users" name="type">Username</option>
                                <option value="repos" name="type">Repositories</option>
                            </select>

                            <i className="fas fa-search"></i>

                            {this.state.type === "users" ? <input className="form-control " name="searchData" onChange={this.handleChange} value={this.state.searchData} type="search" placeholder="Search by Username " aria-label="Search" />
                                : <input className="form-control mr-sm-2" name="progLang" onChange={this.handleChange} value={this.state.progLang} type="search" placeholder="Search Repo by Programming Language" aria-label="Search" />}
                            <button className="btn btn-outline-success my-2 " onClick={this.handleSubmit} type="submit">Search</button>


                        </form>

                    </div>
                </div>
                <Table displayData={this.state.data} />

            </div>
        )
    }
}
