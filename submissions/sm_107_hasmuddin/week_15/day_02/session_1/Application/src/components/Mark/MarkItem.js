import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import queryString from 'query-string'


export class MarkItem extends Component {
    constructor(props){
        super(props)
        this.state={
            item:"",
            quantity:""
        }
    }
    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        console.log(values)
        this.setState({
            item:values.item,
            quantity:values.quantity
        })
      }
    deleteItem=()=>{
    const config = {   
        method: 'POST',
        url: '/purchased',
        baseURL:"http://127.0.0.1:5000",
        headers: {
            'Content-Type': 'application/json',
        },
        data:{
            "item_no":this.props.match.params.id
        }

    }
    axios(config).then(res=>{
        alert(res.data.message)
    })
    }
    render() {
       
        return (
            <div className="p-5 m-5">
                <h5>
                    Do You Really Want to Add <strong className="text-danger"> {this.state.item} </strong> with quantity <span className="text-danger">{this.state.quantity}</span> in your cart ?
                    <button onClick={this.deleteItem} className="btn btn-success m-1">YES</button>
                    <Link className="btn btn-dark m-1" to="/home">Back To Table</Link>
                    <Link className="btn btn-info m-1" to="/done">Cart</Link>
                </h5>
                
            </div>
        )
    }
}

export default MarkItem
