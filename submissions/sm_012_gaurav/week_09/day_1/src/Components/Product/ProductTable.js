/* eslint-disable no-useless-constructor */
import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <table className = "table table-dark text-left mt-3">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productList.map((e)=><ProductRow product = {e} key = {e} />)}
                        <tr>
                            <td colSpan = "4">Total Quantity</td>
                            <td colSpan = "2">{this.props.totalQuantity}</td>
                        </tr>
                        <tr>
                            <td colSpan = "4">Total Price</td>
                            <td colSpan = "2" className = "text-right">{this.props.totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default ProductTable;