import React, { Component } from "react";
import ProductTable from "./ProductTable";

export class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.products = [
      {
        productName: "Lotion",
        productId: "1",
        sellerName: "Ayaan",
        category: "mens",
        qty: "2",
        cod: false
      }
    ];
    this.state = {
      data: {
        productName: "",
        productId: "",
        sellerName: "",
        category: "",
        qty: "",
        cod: false
      },
      allProducts: this.products
    };
  }
  //   handlechange is setting state to obj to pushing all data in table
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.checked) {
      this.setState({
        cod: true
      });
    } else if (!e.target.checked) {
      this.setState({
        cod: false
      });
    }
  };
  //   filter by category
  catogryFilter = e => {
    this.setState({
      allProducts: this.state.allProducts.filter(function(ele) {
        return ele.category == e.target.value;
      })
    });
  };
  codFilter = e => {
    this.setState({
      allProducts: this.state.allProducts.filter(function(ele) {
        return ele.cod == e.target.value;
      })
    });
  };
  // submit fun for submit buttton where all data will rendering after clicking this bttn
  submit = () => {
    this.setState({
      toggle: true
    });
    this.products.push(this.state);
  };

  render() {
    console.log(this.products);

    //input field storing all the data
    return (
      <div className="container-fluid row">
        <div className="col-5 p-5">
          <h2>Product</h2>
          <input
            type="text"
            value={this.state.productId}
            name="productId"
            onChange={this.handleChange}
            placeholder="Product id"
            className="form-control m-2"
          />
          <input
            type="text"
            name="productName"
            onChange={this.handleChange}
            value={this.state.productName}
            placeholder="Product Name"
            className="form-control m-2"
          />
          <input
            type="text"
            name="sellerName"
            onChange={this.handleChange}
            value={this.state.sellerName}
            placeholder="Seller Name"
            className="form-control m-2"
          />

          <select
            name="category"
            name="category"
            onChange={this.handleChange}
            value={this.state.category}
            className="custom-select m-2"
          >
            <option value="" defaultValue disabled>
              Selct Category
            </option>
            <option value="electrical">Electrical</option>
            <option value="gaming">Gaming</option>
            <option value="fashion">Fashion</option>
            <option value="mens">Mens</option>
          </select>

          <label htmlFor="checkbox" id="checkLable" className="m-2">
            COD applicable?
            <input
              value={this.state.cod}
              type="checkbox"
              id="check"
              onChange={this.handleChange}
            />
          </label>

          <input
            type="text"
            //   value = {this.state.qty}
            onChange={this.handleChange}
            name="qty"
            placeholder="Quantity"
            className="form-control m-2"
          />
          <input
            type="submit"
            value="Add Product"
            onClick={this.submit}
            className="btn btn-success my-2"
          />
        </div>

        {/* product table is restore all state data */}

        <div className="col-7 my-5 border">
          <table className="table">
            <tr className="border">
              <td>Product id</td>
              <td>Product Name</td>
              <td>Seller Name</td>
              <td>
                Category
                <select
                  name="cat"
                  onChange={this.catogryFilter}
                  className="custom-select"
                >
                  <option value="">--</option>
                  <option value="electrical">Electrical</option>
                  <option value="gaming">Gaming</option>
                  <option value="fashion">Fashion</option>
                  <option value="mens">Mens</option>
                </select>
              </td>
              <td>QTY</td>
              <td>
                COD
                <select name="codeAv" className="custom-select">
                  <option>--</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </td>
            </tr>
            {this.state.allProducts.map(function(ele) {
              return <ProductTable data={ele} />;
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default ProductForm;
