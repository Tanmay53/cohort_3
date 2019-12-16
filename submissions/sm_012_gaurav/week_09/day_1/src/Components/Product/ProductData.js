/* eslint-disable no-useless-constructor */
import React from 'react';
import ProductTable from './ProductTable';

class ProductData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            cod: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleClick = () => {
        this.props.filterList(this.state.category, this.state.cod);
    }

    render() {
        return (
            <>
                <div className = "row">
                    <div className = "col-6">
                        <label htmlFor="category">Select Category</label>
                        <select id = "category" onChange = {this.handleChange} onClick = {this.handleClick} className = "custom-select">
                            <option value = "">All</option>
                            {this.props.categories.map((ele) => <option value = {ele} key = {ele}>{ele}</option>)}
                        </select>
                    </div>
                    <div className = "col-6">
                        <label htmlFor="cod">Cash On Delivery</label>
                        <select id = "cod" onChange = {this.handleChange} onClick = {this.handleClick} className = "custom-select">
                            <option value = "">All</option>
                            <option value = "na">COD Not Available</option>
                            <option value = "a">COD Available</option>
                        </select>
                    </div>
                </div>
                <ProductTable productList = {this.props.productList} totalPrice = {this.props.totalPrice} totalQuantity = {this.props.totalQuantity} />
            </>
        );
    }
}

export default ProductData;