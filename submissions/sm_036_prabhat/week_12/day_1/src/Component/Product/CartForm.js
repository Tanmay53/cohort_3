import React, { Component } from 'react'
import CartTable from './CartTable'

export default class CartForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemName: "",
            itemId: "",
            itemDescription: "",
            category: "",
            price: "",
            arr: [],
            isShow: false,
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        let item = { ...this.state }
        delete item.arr

        this.setState({
            arr: [...this.state.arr, { ...item }]
        })
    }

    handelShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        console.log(this.state.arr)
        return (
            <div>
                <div className="container mt-5">
                    <div className="display-3 text-center m-5">Cart</div>
                    <div className="d-flex justify-content-center">
                        <div className="row">
                            <div className="card p-5">
                                <form action="">
                                    <label>Item Name</label>
                                    <input name="itemName" onChange={this.handelChange} value={this.state.itemName} className="form-control"></input>
                                    <label>Item Id</label>
                                    <input name="itemId" onChange={this.handelChange} value={this.state.itemId} className="form-control"></input>
                                    <label>Item Description</label>
                                    <input name="itemDescription" onChange={this.handelChange} value={this.state.itemDescription} className="form-control"></input>
                                    <label>Category</label>
                                    <select name="category" onChange={this.handelChange} className="custom-select">
                                        <option value="">Select</option>
                                        <option value="Food">Food</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                        <option value="Electronic">Electronic</option>
                                        <option value="Appliances">Appliances</option>
                                    </select>
                                    <label>Price</label>
                                    <input type="number" name="price" onChange={this.handelChange} value={this.state.price} className="form-control"></input>
                                </form>
                                <button className="btn btn-secondary m-3" onClick={this.handelSubmit}>Submit Details</button>
                                <button className="btn btn-secondary mx-3" onClick={this.handelShow}>Show Item Table</button>
                            </div>
                        </div>
                    </div>
                        {this.state.isShow && <CartTable data={this.state.arr} />}
                </div>
            </div>
        )
    }
}
