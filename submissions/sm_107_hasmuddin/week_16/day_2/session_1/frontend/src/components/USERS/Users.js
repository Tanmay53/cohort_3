import React, { Component } from 'react'
import axios from "axios"
import UserTable from "./UserTable"
import PageButton from "./PageButton"
import {Link} from "react-router-dom"



export class Users extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            per_page:0,
            curr_page:0,
            page:0,
            total_pages:0,
            total_user:0
        }
    }
    componentDidMount(){
        const config = {   
            method: 'POST',
            url: '/users',
            baseURL:"http://127.0.0.1:5000",
            headers: {'Content-Type': 'application/json'},
            data:{"per_page":100}}
    axios(config)
    .then(res=>{
        console.log(res)
        this.setState({data:res.data.data,total_user:res.data.total})
    })
}

pagination = (e)=>{
    this.setState({
        per_page:Number(e.target.value)
    })
    const config = {   
        method: 'POST',
        url: '/users',
        baseURL:"http://127.0.0.1:5000",
        headers: {'Content-Type': 'application/json'},
        data:{"per_page":Number(e.target.value)}}
axios(config)
.then(res=>{this.setState({data:res.data.data,total_pages:res.data.total_pages})}
)
}

pageBtnClick=(e)=>{
    this.props.history.push(`?page=${Number(e.target.value)}`)
    const config = {   
        method: 'POST',
        url: `/users?page=${Number(e.target.value)}`,
        baseURL:"http://127.0.0.1:5000",
        headers: {'Content-Type': 'application/json'},
        data:{"per_page":Number(this.state.per_page)}}
        axios(config)
        .then(res=>{this.setState({data:res.data.data, page:res.data.page})}
        )
}

    render() {
        const {data, page,  total_pages, total_user} = this.state
        return (
            <div className="table-responsive">
            <div className="bg-light row justify-content-right">
                <div className="col-lg-4 col-md-4 col-6">
                    <h5>
                        Select Users per page
                    </h5>
                    <select className="custom-select col-md-3 col-4" onChange={this.pagination} name="users">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            
            <p className="col-4 mx-4 text-center text-white bg-dark">Total Users : {total_user}</p>
            <Link className="btn btn-success " to="/create">
                <h5>Add More users</h5>
            </Link>
            </div>
        
            <table className="table">
                <thead className="bg-dark fixed-thead text-warning">
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Mobile</td>
                        <td>Email</td>
                        <td>age</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
    
                <tbody className="bg-light">
                    {data.map(user=>{
                        return <UserTable key={user.id} user={user}/>
                    })}
                </tbody>
            </table>
            <div className="col-lg-12 col-md-12 col-12">
              Page : {`${page} of ${total_pages}`} {total_pages==0?null:<PageButton pageBtnClick={this.pageBtnClick} count={total_pages}/>}   
                </div>
            </div>
        )
    }
}

export default Users
