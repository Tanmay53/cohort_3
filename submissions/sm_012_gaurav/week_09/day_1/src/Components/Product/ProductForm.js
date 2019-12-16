/* eslint-disable no-useless-constructor */
import React from 'react';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productId: '',
            sellerName: '',
            category: '',
            quantity: '',
            price: '',
            codApplicable: false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleCheck = (e) => {
        this.setState({
            codApplicable: e.target.checked
        });
        setTimeout(() => console.log(this.state.codApplicable), 1000);
    }

    handleClick = () => {
        this.props.onPressSubmit(this.state);
        this.setState({
            productName: '',
            productId: '',
            sellerName: '',
            category: '',
            quantity: '',
            price: '',
            codApplicable: false
        });
    }

    render() {
        return (
            <div className = "mt-3 mb-3">
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input id="productName" type="text" className="form-control" value={this.state.productName} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="productId">Product ID</label>
                    <input id="productId" type="number" className="form-control" value={this.state.productId} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="sellerName">Seller Name</label>
                    <input id="sellerName" type="text" className="form-control" value={this.state.sellerName} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input id="category" type="text" className="form-control" value={this.state.category} onChange={this.handleChange}></input>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="codApplicable" onChange={this.handleCheck} checked={this.state.codApplicable}></input>
                    <label className="form-check-label" htmlFor="codApplicable">COD</label>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input id="quantity" type="Number" className="form-control" value={this.state.quantity} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="Number" className="form-control" value={this.state.price} onChange={this.handleChange}></input>
                </div>
                <button className="btn btn-primary" onClick={this.handleClick}>Submit Details</button>
            </div>
        )
    }
}


export default ProductForm;