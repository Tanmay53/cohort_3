import React, { Component } from 'react'
import axios from "axios"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageData: []
        }
    }


    componentDidMount = () => {
        this.setState({
            pageData: this.props.pageData
        })
    }

    // function to delete a country with all it's cities
    handleDelete = async (idx, stat_id) => {
        var token  = this.props.token
        console.log(idx, stat_id)
        await axios({
            method: "GET",
            url: `http://127.0.0.1:5000/deleteCountry/${idx}/${stat_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(alert("Country/city has been deleted"))
    }

    render() {
        console.log(this.props.pageData)
        return (
            <React.Fragment>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>SI.NO</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Population</th>
                                <th>Income</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.pageData && this.props.pageData.map((item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.country}</td>
                                    <td>{item.city}</td>
                                    <td>{item.population}</td>
                                    <td>{item.income}</td>
                                    <td><button class="text-white bg-dark btn btn-dark"><Link to={`/edit/${item.id}/${item.stat_id}`} class="text-white">Edit</Link></button></td>
                                    <td><button onClick={() => this.handleDelete(item.id, item.stat_id)} class="btn btn-outline-danger text-dark">Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )

    }
}
const mapStateToProps = (state) => ({
    pageData: state.pageData,
    token:state.token
})

export default connect(mapStateToProps)(Pagination)