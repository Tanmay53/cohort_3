import React, { Component } from "react";

export class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            id: "",
            seller: "",
            category: "",
            cod: false,
            qty: ""
        };
    }

    handleChange = e => {
        if (e.target.name === "cod")
            this.setState({
                cod: !this.state.cod
            });
        else
            this.setState({
                [e.target.name]: e.target.value
            });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.data(this.state);
    };
    render() {
        return (
            <form
                className="form-group bg-light border p-2"
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="name">Product Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    className="form-control"
                />
                <label htmlFor="id">ID</label>
                <input
                    type="text"
                    name="id"
                    onChange={this.handleChange}
                    value={this.state.id}
                    className="form-control"
                />
                <label htmlFor="seller">Seller Name</label>
                <input
                    type="text"
                    name="seller"
                    onChange={this.handleChange}
                    value={this.state.seller}
                    className="form-control"
                />
                <label htmlFor="category">Category</label>
                <select
                    name="category"
                    id=""
                    onChange={this.handleChange}
                    value={this.state.category}
                    className="form-control"
                >
                    <option selected>Choose...</option>
                    <option value="mobile">Mobile</option>
                    <option value="laptop">Laptop</option>
                    <option value="watch">Watch</option>
                </select>
                <label htmlFor="cod">is COD available?</label>
                <input
                    type="checkbox"
                    name="cod"
                    id=""
                    value="true"
                    onChange={this.handleChange}
                />
                <label htmlFor="qty">Quantity</label>
                <input
                    type="text"
                    name="qty"
                    onChange={this.handleChange}
                    value={this.state.qty}
                    className="form-control"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mt-2"
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default ProductForm;
