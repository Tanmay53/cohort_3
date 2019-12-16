import React from "react";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productId: "",
      sellerName: "",
      category: "",
      quantity: "",
      cod: false
    };
  }

  inputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  productAdd = e => {
    e.preventDefault();
    let data = {
      productName: this.state.productName,
      productId: this.state.productId,
      sellerName: this.state.sellerName,
      category: this.state.category,
      quantity: this.state.quantity,
      cod: this.state.cod
    };
    console.log(data);
    this.props.getProduct(data);
  };

  render() {
    return (
      <form onSubmit={e => this.productAdd(e)}>
        <div className="form-group">
          <label>Product Name: </label>
          <input
            type="text"
            name="productName"
            className="form-control"
            value={this.state.productName}
            onChange={e => this.inputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Product ID: </label>
          <input
            type="text"
            name="productId"
            className="form-control"
            value={this.state.productId}
            onChange={e => this.inputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Seller Name: </label>
          <input
            type="text"
            name="sellerName"
            className="form-control"
            value={this.state.sellerName}
            onChange={e => this.inputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Category: </label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={this.state.category}
            onChange={e => this.inputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Quantity: </label>
          <input
            type="text"
            name="quantity"
            className="form-control"
            value={this.state.quantity}
            onChange={e => this.inputChange(e)}
          />
        </div>

        <div className="form-group">
          <div className="form-check">
            <input
              type="checkbox"
              id="gridCheck"
              name="cod"
              className="form-check-input"
              value={this.state.cod}
              onChange={e => this.inputChange(e)}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              COD Applicable
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Add
        </button>
      </form>
    );
  }
}

export default ProductForm;
