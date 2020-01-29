import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"


export class purchasedItems extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        const config = {   
            method: 'GET',
            url: '/purchased',
            baseURL:"http://127.0.0.1:5000",
            headers: {
                'Content-Type': 'application/json',
            }
        }
        axios(config).then(res=>{
            console.log(res.data.purchased_items)
            this.setState({
                data:res.data.purchased_items
            })
        })
        
      }
    render() {
       
        return (
            <div className="p-3 table-responsive">
                <Link className="btn btn-dark m-1" to="/home">Back To Table</Link>
                <h2 className="text-success">Purchased Items</h2>
                <table className="table">
                    <thead className="bg-info h5 text-white">
                        <tr>
                            <td>
                                Item Name
                            </td>
                            <td>
                                Quantity
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data && this.state.data.map((item, index)=>{
                            return <tr key={index}>
                                    <td>{item.item}</td>
                                    <td>{item.quantity}</td> 
                                </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default purchasedItems
