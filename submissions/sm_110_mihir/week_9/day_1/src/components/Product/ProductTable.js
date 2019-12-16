import React, { Component } from "react";

export class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selCategory: "",
            selCod: ""
        };
    }

    handleCategory = e => {
        this.setState({
            selCategory: e.target.value
        });
    };

    handleCod = e => {
        this.setState({
            selCod: Boolean(e.target.value)
        });
    };
    render() {
        let list = [];

        list = this.props.data.map(ele => ele);

        if (this.state.selCategory.length > 0)
            list = list.filter(ele => ele.category === this.state.selCategory);
        if (this.state.selCod === true)
            list = list.filter(ele => ele.cod === true);
        else if (this.state.selCod === false)
            list = list.filter(ele => ele.cod === false);

        let listItem = list.map(ele => (
            <tr key={ele.name + ele.key}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.seller}</td>
                <td>{ele.category}</td>
                <td>{ele.qty}</td>
                <td>{ele.cod ? "Yes" : "No"}</td>
            </tr>
        ));
        return (
            <div>
                <label htmlFor="category">Select Category type</label>
                <select
                    name="category"
                    id=""
                    onChange={this.handleCategory}
                    value={this.state.selCategory}
                    className="form-control"
                >
                    <option value=""></option>
                    <option value="mobile">Mobile</option>
                    <option value="laptop">Laptop</option>
                    <option value="watch">Watch</option>
                </select>
                <label htmlFor="cod">Select COD type</label>
                <select
                    name="cod"
                    id=""
                    onChange={this.handleCod}
                    value={this.state.selCod}
                    className="form-control"
                >
                    <option value=""></option>
                    <option value={true}>COD Available</option>
                    <option value="">COD Not Available</option>
                </select>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Seller name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>COD Available</th>
                        </tr>
                    </thead>
                    <tbody>{listItem}</tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;
