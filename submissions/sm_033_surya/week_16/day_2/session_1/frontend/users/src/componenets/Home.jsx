import React from 'react'
import axios from "axios"
import qs from "query-string"
import { Link } from "react-router-dom"
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            count: "5",
            offset: "0",
            page: 0,
            Num_pages: 0,
            btn_array: []
        }
    }
    componentDidMount() {
        let params = qs.parse(this.props.location.search)
        this.getData(params.count, params.offset)
    }
    getData = (count, offset) => {
        axios.get("http://localhost:5000/listing", {
            params: {
                count: count || 5,
                offset: offset || 0
            }
        })
            .then((res) => {
                this.setState({
                    data: res.data.data_list,
                    Num_pages: res.data.total_pages
                })
                let i = 1
                let temp = []
                while (i <= this.state.Num_pages) {
                    temp.push(i)
                    i++
                }
                this.setState({
                    btn_array: temp
                })
            })
    }
    delete_data = (id) => {
        axios.delete(`http://localhost:5000/delete/${id}`)
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }
    handleChannge = (e) => {
        this.setState({
            count: e.target.value
        })
    }
    handleclick = () => {
        axios.get(`http://localhost:5000/listing?count=${this.state.count}&offset=${this.state.page * this.state.count}`)
            .then((res) => {
                this.setState({
                    data: res.data.data_list,
                    Num_pages: res.data.total_pages
                })
                let i = 1
                let temp = []
                while (i <= this.state.Num_pages) {
                    temp.push(i)
                    i++
                }
                this.setState({
                    btn_array: temp
                })
            }
            )
    }
    render() {
        console.log(this.state)
        if (this.state.data) {
            return (
                <>
                    <div className="container">
                        <div className="col-12 d-flex justify-content-center">
                            <select className="btn btn-success p-6" value={this.state.count} onChange={this.handleChannge} onClick={this.handleclick}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                            </select>
                        </div>
                        <div>
                            {this.state.btn_array.map((ele, i) => <Link to={`?count=${this.state.count}&offset=${this.state.count * i}`}><button className="btn btn-primary m-1"
                                onClick={() => this.getData(this.state.count, this.state.count * i)}>{ele}</button></Link>)}
                        </div>
                        <table className="table text-center">
                            <thead className="thead-dark">
                                <tr><th>Id</th><th>Name</th><th>Age</th><th></th><th></th></tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((ele) => <tr><td><Link to={`user/${ele.id}`}>{ele.id}</Link></td><td>{ele.name}</td><td>{ele.age}</td><td><Link to={`/edit/${ele.id}`}><button className="btn btn-info">Edit</button></Link></td><td><button className="btn btn-danger" onClick={() => this.delete_data(ele.id)}>Delete</button></td></tr>)}
                            </tbody>
                        </table>
                    </div>
                </>
            )
        }
        else {
            return (
                <div>
                    Nodata
            </div>
            )
        }
    }
}
export default Home