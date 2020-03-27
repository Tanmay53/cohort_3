import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from "../../redux/user/actions"

export class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.items.length+1,
            category: "Fruits",
            product: "",
            price: 0
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state, "AddProduct")
        await this.props.add(this.state)
        this.handleReset()
    }

    handleReset = () => {
        this.setState({
            id : this.state.id+1,
            product: "",
            price: 0
        })
    }
    
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6 offset-3 bg-light border shadow rounded">
                        <div className="row my-3">
                            <div className="col text-center">
                                <h1>Add products</h1>
                            </div>
                        </div>
                        <form className="text-center" >
                            {/* Category */}
                            <div className="form-group row">
                                <div className="col">
                                    <label className="col-sm-4 col-form-label">Category</label>
                                </div>
                                <div className="col">
                                    <select name = "category" 
                                            className="form-control" 
                                            value = {this.state.category} 
                                            onChange = {this.handleChange} >
                                        <option value = "Fruits">Fruits</option>
                                        <option value = "Vegetables">Vegetables</option>
                                        <option value = "Frozen">Frozen</option>
                                        <option value = "Dairy">Dairy</option>
                                        <option value = "Meat">Meat</option>
                                        <option value = "Spices">Spices</option>
                                    </select>
                                </div>
                            </div>
                            {/* Product */}
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="product" className="col-sm-4 col-form-label">Product</label>
                                </div>
                                <div className="col">
                                    <input  type="text" 
                                            name="product"
                                            value={this.state.product}
                                            onChange={this.handleChange} 
                                            className="form-control" 
                                            placeholder="Enter Product" />
                                </div>
                            </div>
                            {/* Price */}
                            <div className="form-group row mb-4">
                                <div className="col">
                                    <label htmlFor="price" className="col-sm-4 col-form-label">Price</label>
                                </div>
                                <div className="col">
                                    <input  type="number" 
                                            name="price"
                                            className="form-control" 
                                            value={this.state.price}
                                            onChange={this.handleChange}
                                            placeholder="Enter Price" />
                                </div>
                            </div>
                            {/* Submit */}
                            <div className="row d-flex justify-content-center my-4 ">
                                <div className="col mb-3">
                                    <button onClick = {this.handleSubmit} type="submit" className="btn btn-outline-success">ADD</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.userReducer.groceryList,
})


const mapDispatchToProps = dispatch => ({
    add: payload => dispatch(addProduct(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
