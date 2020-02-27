import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: []
        }
    }
    componentDidMount = () => {
        axios.get("http://127.0.0.1:5000/list")
            .then(res => this.setState({
                array: res.data
            }))
    }
    render() {
        return (
            <div>
                {this.state.array.length > 0 ? 
                <div>
                    <table class="table"><tr><th>ID</th><th>NAME</th></tr>
                        {this.state.array.map(item =>
                            <tr>
                                <button><Link to={`/show/${item.id}`}>{item.id}</Link></button>
                                <td>{item.name}</td>
                                <button><Link to={`/edit/${item.id}`}>Edit</Link></button>
                                <button><Link to={`/delete/${item.id}`}>Delete</Link></button>
                            </tr>)}
                    </table>
                </div> : <h5><i>Empty</i></h5>}
            </div>
        )
    }
}
export default List
