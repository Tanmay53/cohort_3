import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "array": [],
            "pages": []
        }
    }
    componentDidMount = () => {
        console.log(this.props)
        axios.get("http://127.0.0.1:5000/list?pages=1")
            .then(res => this.setState({
                array: res.data[0],
                pages: res.data[1]
            }))
    }
    handleClick = (item) => {
        axios.get(`http://127.0.0.1:5000/list?pages=${item}`)
            .then(res => this.setState({
                array: res.data[0]
            }))
    }
    render() {
        return (
            <div>
                {this.state.array.length > 0 ?
                    <div>
                        <br></br>
                        <table class="table table-striped table-bordered mt-5">
                            <thead><tr class="thead-dark" style={{ "textAlign": "center" }}><th>ID</th><th>NAME</th><th>Show</th><th>Edit</th><th>Delete</th></tr></thead>
                            <tbody>
                                {this.state.array.map((item, index) =>
                                    <tr key={index} style={{ "margin": "10px" }}>
                                        <td class="text-center"><b >{item.id}</b></td>
                                        <td><h5 style={{ "textAlign": "center" }}><b>{item.name}</b></h5></td>
                                        <td style={{ "textAlign": "center" }}><button type="button" class="btn btn-outline-info"><Link to={`/show/${item.id}`} style={{ "textDecoration": "none" }}>Show</Link></button></td>
                                        <td style={{ "textAlign": "center" }}><button type="button" class="btn btn-outline-warning"><Link to={`/edit/${item.id}`} style={{ "textDecoration": "none" }}>Edit</Link></button></td>
                                        <td style={{ "textAlign": "center" }}> <button type="button" class="btn btn-outline-danger"><Link to={`/delete/${item.id}`} style={{ "textDecoration": "none" }}>Delete</Link></button></td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div> : <h2 style={{ "color": "red", "textAlign": "center", "margin": "150px" }}><i>No User in Database</i></h2>}
                <div>
                    <ul>
                        {this.state.pages.map((item, index) =>
                            <li key={index}><button onClick={() => this.handleClick(item)}>{item}</button></li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
export default List
