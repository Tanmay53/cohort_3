import React, { Component } from 'react'
import axios from "axios"
import HomeTable from "./HomeTable"
import {Link} from "react-router-dom"



export class Home extends Component { 
    constructor(props){
        super(props)
        this.state={
            data: []
        }
    }
    componentDidMount(){
       
        const config = {   
        method: 'get',
        url: '/listing',
        baseURL:"http://127.0.0.1:5000"
    }
    axios(config).then(res=>{
        this.setState({
            data:res.data.data
        })
    })
}
    render() {
        console.log(this.state)
        return (
            <div className="table-responsive p-3">
                <div className="text-right">
                <Link className="btn btn-info m-1" to="/done">Cart</Link>
                <Link className="btn btn-outline-danger " to='/add'>Add More item</Link>
                </div>
                <h2 className='text-center bg-success text-white'>My Groceries</h2>
                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                        <td>
                            Purchased
                        </td>  
                        <td>
                            Item Name
                        </td> 
                        <td>
                            Quantity
                        </td> 
                        <td>
                            Delete
                        </td>   
                        <td>
                            Edit
                        </td>              

                        </tr>
                        
                    </thead>
                <tbody>
                    {this.state.data.map((item, index)=>{
                        return <HomeTable key={index} data ={item} index={index+1}/>
                    })}
                </tbody>
                </table>
                
            </div>
        )
    }
}

export default Home
