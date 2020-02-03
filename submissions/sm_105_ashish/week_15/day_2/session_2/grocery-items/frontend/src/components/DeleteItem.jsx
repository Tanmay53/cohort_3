import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from "react-router-dom"

export default class DeleteItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
             item:{}
        }
    }
    componentDidMount(){
        let item = this.props.arr.find((ele,index)=>index+1 == Number(this.props.match.params.id))
        // console.log(item)
        this.setState({
            item:{...item}
        })
    }

    deleteItem = (e)=>{
        axios.post("http://127.0.0.1:5000/delete/"+Number(e))
        .then(res=>{
            alert(res.data.item_no)
            this.props.updateState()
            this.props.history.push('/')
            
        })
    }
    
    render() {
        return (
        <div className ="col-6 m-auto text-center">
            <div class="card card-cascade narrower">
                <div class="view view-cascade overlay">
                    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                        alt="Card image cap" />
                    <a>
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div class="card-body card-body-cascade">
                    <h5 class="pink-text pb-2 pt-1">Item quantity: {this.state.item.quantity}</h5>
                    <h4 class="font-weight-bold card-title">Item Name: {this.state.item.item_name}</h4>
                    <p class="card-text">Are you sure you want to delete this item</p>
                    <button value={Number(this.props.match.params.id)} onClick={(e)=>this.deleteItem(e.target.value)} class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
        )
    }
}
