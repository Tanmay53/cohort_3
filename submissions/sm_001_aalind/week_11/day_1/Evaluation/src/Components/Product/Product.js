import React, {Component} from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allProducts: [],
            showTable: false
        }
    }

    createProduct = (product) => {
        this.setState((prevState) => {
            return {
                allProducts: [...prevState.allProducts, product]
            }
        }, () => {
            alert("Item Created!");
            window.localStorage.setItem("allProducts", JSON.stringify(this.state.allProducts));
        });
    }

    showTableHandler = () => {
        this.setState((prevState) => {
            return {
                showTable: !prevState.showTable
            }
        })
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.showTableHandler}
                    style={{margin: "20px 0px"}}
                >
                {(this.state.showTable) ? "Show Form" : "Show Table"}
                </button>
                {
                    (this.state.showTable) ? <ProductTable /> : <ProductForm createProduct={this.createProduct} />
                }
                
            </div>
        )
    }
}

export default Product