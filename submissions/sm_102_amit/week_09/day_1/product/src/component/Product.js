import React from "react";
import ProductForm from "./ProductForm";
import ProductData from "./ProductData";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount = () => {
    let localData = localStorage.getItem("products");
    if (localData == null) {
      localData = [];
    } else {
      localData = JSON.parse(localData);
    }
    this.setState({
      products: localData
    });
  };

  storeProduct = product => {
    const newProducts = [...this.state.products, product];
    this.setState({
      products: newProducts
    });
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  filterTable = category => {
    this.setState(
      {
        products: this.state.products.filter(obj => {
          if (obj.category === category && obj.cod === true) {
            return obj;
          }
        })
      },
      this.componentDidUpdate
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-3 border-right">
          <ProductForm getProduct={this.storeProduct} />
        </div>
        <div className="col-md-9 border-left">
          <ProductData data={this.state.products} category={this.filterTable} />
        </div>
      </div>
    );
  }
}

export default Product;
