import React from 'react';
import ProductForm from './ProductForm';
import ProductData from './ProductData';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.wholeData = [];
        this.state = {
            productList: [],
            submitClickCounter: 0,
            displayButtonClicked: false,
            categories: [],
            totalQuantity: 0,
            totalPrice: 0
        };
    }

    claculateTotalQuantity = (arr) => {
        return arr.reduce((a,e) => a+Number(e.quantity), 0);
    }

    claculateTotalValue = (arr) => {
        return arr.reduce((a,e) => a+Number(e.quantity)*Number(e.price), 0);
    }

    addProduct = (obj) => {
        this.wholeData.push(obj);
        this.setState((state) => {
            state.productList.push(obj);
            if (state.categories.indexOf(obj.category) === -1) {
                state.categories.push(obj.category);
            }
            return {productList: state.productList,
                submitClickCounter: state.submitClickCounter+1,
                categories: state.categories,
                totalQuantity: this.claculateTotalQuantity(state.productList),
                totalPrice: this.claculateTotalValue(state.productList)
            };
        });
    }

    handleClick = () => {
        this.setState({
            submitClickCounter: 0,
            displayButtonClicked: true
        });
    }

    filterList = (a,b) => {
        let newList;
        if (a.length === 0 && b.length === 0) {
            newList = this.wholeData;
        }
        else if (a.length !== 0 && b.length === 0) {
            newList = this.wholeData.filter((e) => {
                return e.category === a;
            });
        }
        else if (a.length === 0 && b.length !== 0) {
            if (b === 'na') {
                b = false;
            }
            else {
                b = true;
            }
            newList = this.wholeData.filter((e) => {
                return e.codApplicable === b;
            });
        }
        else {
            if (b === 'na') {
                b = false;
            }
            else {
                b = true;
            }
            newList = this.wholeData.filter((e) => {
                return e.category === a && e.codApplicable === b;
            });
        }

        this.setState({
            productList: newList,
            totalQuantity: this.claculateTotalQuantity(newList),
            totalPrice: this.claculateTotalValue(newList)
        });
    }

    render() {
        const elem = this.state.displayButtonClicked?<ProductData productList = {this.state.productList} categories = {this.state.categories} filterList = {this.filterList} totalPrice = {this.state.totalPrice} totalQuantity = {this.state.totalQuantity} />:<ProductForm onPressSubmit = {this.addProduct} />;
        return (
            <div className = "col-6 mx-auto mt-3">
                {elem}
                {this.state.submitClickCounter>0 && <button className = "btn btn-success" onClick = {this.handleClick}>Display Products</button>}
            </div>
        );
    }
}

export default Product;