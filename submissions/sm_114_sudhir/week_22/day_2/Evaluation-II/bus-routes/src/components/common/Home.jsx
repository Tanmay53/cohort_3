import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBuses, deleteBus, filterBus } from '../../redux/bus/Action'
import { getCities } from '../../redux/get_cities/action'
import { Link } from 'react-router-dom'


class Home extends Component {
    state = {
        buses: this.props.buses
    }

    componentDidMount = async () => {
        await this.props.getBuses('http://127.0.0.1:5000/')
        this.props.getCities('http://127.0.0.1:5000/get_cities')
    }

    delete = (e) => {
        alert(e.target.value)
        let id = e.target.value
        this.props.deleteBus(`http://127.0.0.1:5000/delete/${id}`)
        this.props.getBuses('http://127.0.0.1:5000/')
    }

    filterBus = (e) => {
        e.preventDefault()
        this.props.filterBus(e.target.value)
    }

    render() {
        console.log(this.props.cities)
        if(this.props.state.buses.buses) {
            return (
                <div className="container mt-3">
                    <h2 className="text-center">Database</h2>
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="#filter">Filter By Source</label>
                                <select id="filter" className="form-control" onClick={this.filterBus}> 
                                    {this.props.cities && this.props.cities.map(city => {
                                        return (
                                            <option value={city.id}>{city.cities}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="#filter">Pagination</label>
                                <select id="filter" className="form-control">
                                    {/* {classsOption.map(ele => {
                                        return ele
                                    })} */}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table class="table table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">Source</th>
                                        <th scope="col">Destination</th>
                                        <th scope="col">Bus</th>
                                        <th scope="col">Schedule</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.state.buses.buses.map(bus => {
                                        return (
                                            <tr key={bus.id}>
                                                <td>{bus.source}</td>
                                                <td>{bus.destination}</td>
                                                <td>{bus.bus}</td>
                                                <td>{bus.schedule}</td>
                                                <td>
                                                    <Link to={`/bus/edit/${bus.id}`}>
                                                        {/* <button
                                                            value={bus.id} 
                                                            onClick={this.edit}
                                                            className="btn btn-primary"
                                                            >Edit
                                                        </button> */}Edit
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link>
                                                        <button
                                                            value={bus.id} 
                                                            onClick = {this.delete}
                                                            className="btn btn-danger"
                                                            >Delete
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <h1>Page Loding</h1>
        }
        
    }
}

const mapStateToProps = (state) => ({
    state: state.busReducer,
    cities: state.cityReducer.cities.cities
})

const mapDispatchToProps = dispatch => ({
    getBuses: (url) => dispatch(getBuses(url)),
    deleteBus: (url, id) => dispatch(deleteBus(url, id)),
    getCities: (url) => dispatch(getCities(url)),
    filterBus: (url, id) => dispatch(filterBus(url, id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)