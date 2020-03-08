import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "db": [],
            "format": 0
        }
    }
    componentDidMount = async () => {
        await axios.get("http://127.0.0.1:5000/list")
            .then(res => this.setState({
                db: res["data"]
            }))
    }
    handleClick = async (item) => {
        console.log(item)

        await axios.get(`http://127.0.0.1:5000/delete/${item}`)
            .then(res => console.log(res))

        await axios.get("http://127.0.0.1:5000/list")
            .then(res => this.setState({
                db: res["data"]
            }))
    }
    handleCard = () => {
        this.setState({
            format: 0
        })
    }
    handleTable = () => {
        this.setState({
            format: 1
        })
    }
    render() {
        console.log(this.state.format)
        return (
            <React.Fragment>
                <button onClick={this.handleCard} class="btn btn-secondary m-2 mt-4">Card format</button><button onClick={this.handleTable} style={{ "float": "right" }} class="btn btn-secondary m-2 mt-4">Table Format</button>
                {this.state.format == 1 ?
                    <div class="table-responsive">
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr style={{ "color": "white", "backgroundColor": "black" }}>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ID</th>
                                    <th>NUMBER</th>
                                    <th>Add</th>
                                    <th>Edit</th>
                                    <th>Info</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.db.map(item =>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.id}</td>
                                        <td>{item.number}</td>
                                        <td><button class="btn btn-primary"><Link to={`/add_address/${item.id}`} style={{ "color": "white", "textDecoration": "none" }}>Add Address</Link></button></td>
                                        <td><button class="btn btn-warning"><Link to={`/edit/${item.id}`} style={{ "color": "white", "textDecoration": "none" }}>Edit user</Link></button></td>
                                        <td><button class="btn btn-info"><Link to={`/detail/${item.id}`} style={{ "color": "white", "textDecoration": "none" }}>Detail Info</Link></button></td>
                                        <td><button class="btn btn-danger" style={{ "color": "white", "textDecoration": "none" }} onClick={() => this.handleClick(item.id)}>DELETE</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div> :
                    <div class="container-fluid">
                     <div class="row">
                        {/* <div class="card-group"> */}
                            {this.state.db.map((item,index) =>
                                <div class="col-lg-4 col-md-6 my-sm-5 col-sm-12 my-2">
                                    <div class="card ">
                                        <img src="https://placeimg.com/640/480/people" class="card-img-top" alt="..." style={{"height":"200px"}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <p class="card-text">{item.email}</p>
                                            <p class="card-text">{item.number}</p>
                                            <div class="d-flex justify-content-between">
                                                <button class="btn btn-primary"><Link to={`/add_address/${item.id}`} style={{ "color": "white", "textDecoration": "none" }}>Add Address</Link></button>
                                                <button class="btn btn-warning"><Link to={`/edit/${item.id}`} style={{ "color": "white", "textDecoration": "none" }}>Edit user</Link></button></div>
                                            </div>
                                            <div class="card-footer d-flex justify-content-between" >
                                                <button class="btn btn-info"><Link to={`/detail/${item.id}`} style={{ "color": "white", "textDecoration": "none" }}>Detail Info</Link></button>
                                                <button class="btn btn-danger" style={{ "color": "white", "textDecoration": "none" }} onClick={() => this.handleClick(item.id)}>DELETE</button>
                                            </div>
                                    </div>
                                </div>
                            )}
                        {/* </div> */}
                    </div>
                    </div>}
            </React.Fragment>
        )
    }
}

export default List