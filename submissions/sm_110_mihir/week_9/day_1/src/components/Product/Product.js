import React, { Component } from "react";
import Form from "./ProductForm";
import Display from "./ProductTable";

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catelog: []
        };
    }

    addProduct = item => {
        this.setState({
            catelog: [...this.state.catelog, item]
        });
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h3 className="bg-primary text-white p-2">
                            Enter product
                        </h3>
                        <Form data={this.addProduct} />
                    </div>
                    <div className="col-8">
                        <h3 className="bg-primary text-white p-2">
                            Product table
                        </h3>
                        <Display data={this.state.catelog} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
