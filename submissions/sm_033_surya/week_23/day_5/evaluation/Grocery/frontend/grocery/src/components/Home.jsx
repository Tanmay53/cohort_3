import React, { Component } from 'react'
import { connect } from 'react-redux'
import qs from 'query-string'
import { getdata, getcategories, filterdata, sorting } from '../Redux/actions'
import { Redirect } from 'react-router'
import { Link } from "react-router-dom"


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 10,
            category: "",
            issort: true
        }
    }
    componentDidMount() {
        this.props.getcategories("GET", "http://localhost:5000/data/category", this.props.value.token)
        let params = qs.parse(this.props.location.search)
        let page = Number(params.pages)
        let count = this.state.count
        let offset = (page - 1) * count
        this.props.getdata(count, offset || 0, this.props.value.token)
    }
    setdata = (ele) => {
        let offset = (ele - 1) * this.state.count
        this.props.getdata(this.state.count, offset || 0, this.props.value.token)
    }
    categoryfilter = () => {
        this.props.filterdata(this.state.category)
    }
    handleChange = (e) => {
        this.setState({
            category: e.target.value
        })
    }
    issorting = () => {
        this.setState({
            issort: !this.state.issort
        })
        this.props.sorting(this.state.issort)
    }
    render() {
        console.log(this.state.category, this.props.value.categorylist)
        if (this.props.value.login) {
            return (
                <>
                    <div className="container mt-5">
                        <select name="category" className="btn btn-info m-2" onClick={() => this.categoryfilter()} value={this.state.category} onChange={this.handleChange}>
                            <option >select by category</option>
                            {this.props.value.maindata && this.props.value.categorylist.map((ele) => <option value={ele.type} key={ele.id}>{ele.type}</option>)}
                        </select>
                        <button className="btn btn-success" onClick={() => this.issorting()}> Sort by Price</button>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Sl.no</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.value.duplicatedata && this.props.value.duplicatedata.map((ele) => <tr key={ele.id}><td>{ele.id}</td><td>{ele.name}</td><td>{ele.category}</td><td>{ele.price}</td></tr>)}

                            </tbody>
                        </table>
                        <div className="text-center">
                            {this.props.value.maindata && this.props.value.pagelist.map((ele) => <Link to={`?pages=${ele}`}> <button className="btn btn-primary" onClick={() => this.setdata(ele)}>{ele}</button></Link>)}
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    value: state.loginreducer
})

const mapDispatchToProps = dispatch => ({
    getcategories: (M, U, A) => dispatch(getcategories(M, U, A)),
    getdata: (a, b, c) => dispatch(getdata(a, b, c)),
    filterdata: (a) => dispatch(filterdata(a)),
    sorting: (a) => dispatch(sorting(a))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
