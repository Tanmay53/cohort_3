import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBuses, deleteBus, } from '../../redux/bus/Action'
import { filterBus} from '../../redux/filterBus/action'
import { getCities } from '../../redux/get_cities/action'
import { Link } from 'react-router-dom'
import BasicPagination from './Pagination'
import queryString from 'query-string'


class Home extends Component {
    state = {
        buses: this.props.buses,
        perPage: 5,
        dupPage: 0
    }

    componentDidMount = async () => {
        const {page} = this.props;
        await this.props.getBuses('http://127.0.0.1:5000/')
        this.props.getCities('http://127.0.0.1:5000/get_cities')
        this.setState({
            dupPage: page
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.getBuses(`http://127.0.0.1:5000/?page=${1}&&per_page=${this.state.perPage}`)
        }

        if (this.props.location.search !== prevProps.location.search) {
            let pagination = queryString.parse(this.props.location.search)
            let page = pagination.page
            console.log(page)
            this.props.getBuses(`http://127.0.0.1:5000/?page=${page}&&per_page=${this.state.perPage}`)
        }
    }

    delete = (e) => {
        alert(e.target.value)
        let id = e.target.value
        this.props.deleteBus(`http://127.0.0.1:5000/delete/${id}`)
        this.props.getBuses('http://127.0.0.1:5000/')
    }

    filterBus = (e) => {
        e.preventDefault()
        alert(e.target.value)
        let url = `http://127.0.0.1:5000/bus/filter?source=${e.target.value}`
        this.props.filterBus(url)
    }

    render() {
        const pageList = []
        let page = queryString.parse(this.props.location.search).page
        const { perPage, dupPage } = this.state
        const totalPages = Math.ceil(this.props.totalRows / perPage)

        for (let i = 0; i < totalPages; i++) {
            pageList.push(<li key = {i + 1} className="page-item">
            <Link 
                to={`/?page=${i+1}&&per_page=${perPage}`}
                type="btn" 
                className="page-link">
                {i+1}
            </Link>
        </li>)
        }

        if(this.props.state.buses.buses && this.props.totalRows) {
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
                                            <option value={city.cities}>{city.cities}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="#filter">Pagination</label>
                                <select name="perPage" onChange={this.handleChange} id="filter" className="form-control">
                                    <option>--Selete Per Page Result</option>
                                    <option vlaue="5">5</option>
                                    <option vlaue="10">10</option>
                                    <option vlaue="20">20</option>
                                    <option vlaue="25">25</option>
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
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <nav aria-label="...">
                                <ul class="pagination">
                                    {totalPages !== 0 && pageList}
                                </ul>
                            </nav>
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
    cities: state.cityReducer.cities.cities,
    totalRows: state.busReducer.totalRows,
    page: state.bus,

})

const mapDispatchToProps = dispatch => ({
    getBuses: (url) => dispatch(getBuses(url)),
    deleteBus: (url, id) => dispatch(deleteBus(url, id)),
    getCities: (url) => dispatch(getCities(url)),
    filterBus: (url) => dispatch(filterBus(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)