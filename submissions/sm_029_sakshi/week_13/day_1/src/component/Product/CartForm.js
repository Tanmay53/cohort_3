import React, { Component } from 'react'
import CartTable from './CartTable';

export default class CartForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemName: "",
            itemId: "",
            itemDescription: "",
            category: "--",
            price: "",
            arr: [],
            isdisplaytable: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // --------------------on submit handlee---------------
    handleSubmit=(event)=>{
        event.preventDefault();
        let obj={
            itemName:this.state.itemName,
            itemId:this.state.itemId,
            itemDescription:this.state.itemDescription,
        category:this.state.category,
        price:this.state.price,
        }
        // console.log(obj)
        this.setState({arr:[...this.state.arr,obj]})
        console.log(this.state.arr)
        }
        

    handledisplaytable = () => {
        this.setState({
            isdisplaytable: !this.state.isdisplaytable
        })
    }

    // handle delete=========
    handleDel=(id)=>{
        this.setState({
            arr:this.state.arr.filter(item=>item.id !== id)
        })
    
    }
    render() {
        console.log(this.state.arr)
        return (
            <div>
                <div className="container bg-warning border border-dark mt-5">
                    <div className="display-2 text-center mt-5">ENTER YOUR CART</div>
                    <div className="d-flex justify-content-center">
                        <div className="row bg-danger">
                            <div className="card p-5">
                                <form action="">
                                    <label>ITEM NAME</label>
                                    <input name="itemName" onChange={this.handleChange} value={this.state.itemName} className="form-control"></input>
                                    <label>ITEM ID</label>
                                    <input name="itemId" onChange={this.handleChange} value={this.state.itemId} className="form-control"></input>
                                    <label>ITEM DESCRIPTION</label>
                                    <input name="itemDescription" onChange={this.handleChange} value={this.state.itemDescription} className="form-control"></input>
                                    <label>CATEGORY</label>
                                    <select name="category" onChange={this.handleChange} className="custom-select">
                                        <option value="--">Select</option>
                                        <option value="Food">Food</option>
                                        <option value="Dress">Dress</option>
                                        <option value="Jewellery">Jewellery</option>
                                        <option value="Electronics">Electronics</option>
                                    </select>
                                    <label>[PRICE]</label>
                                    <input type="number" name="price" onChange={this.handleChange} value={this.state.price} className="form-control"></input>
                                </form>
                                <button className="btn btn-success m-3" onClick={this.handleSubmit}>Submit Details</button>
                                <button className="btn btn-info mx-3" onClick={this.handledisplaytable}>Show Item Table</button>
                            </div>
                        </div>
                    </div>
                        {this.state.isdisplaytable && <CartTable cartdata={this.state.arr}  del={this.handleDel} />}
                </div>
            </div>
        )
    }
}
