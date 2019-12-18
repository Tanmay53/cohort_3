/* eslint-disable no-useless-constructor */
import React from 'react';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.product.productId}</td>
                    <td>{this.props.product.productName}</td>
                    <td>{this.props.product.sellerName}</td>
                    <td>{this.props.product.category}</td>
                    <td>{this.props.product.quantity}</td>
                    <td>{this.props.product.price}</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default ProductRow;