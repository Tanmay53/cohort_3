import React, { Component } from "react";
import CartForm from "./CartForm";

class CartTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      id: "",
      desc: "",
      category: "",
      price: "",
      cartArr: [],
      filterArr: [],
      sum: 0
    };
  }

  inputNameHandler = e => {
    this.setState({
      name: e.target.value
    });
  };

  inputIdHandler = e => {
    this.setState({
      id: e.target.value
    });
  };

  inputDescHandler = e => {
    this.setState({
      desc: e.target.value
    });
  };

  inputCategoryHandler = e => {
    this.setState({
      category: e.target.value
    });
  };

  inputPriceHandler = e => {
    this.setState({
      price: e.target.value
    });
  };

  addToCart = e => {
    e.preventDefault();
    let cart = {
      name: this.state.name,
      id: this.state.id,
      desc: this.state.desc,
      category: this.state.category,
      price: this.state.price
    };
    this.state.cartArr.push(cart);
    this.setState({
      name: "",
      id: "",
      desc: "",
      category: "",
      price: "",
      sum: this.state.sum + Number(this.state.price)
    });
  };

  inputFilterHandler = e => {
    let list = [...this.state.cartArr];
    let filterList = list.filter(val => {
      if (val.category === e.target.value) {
        return val;
      } else if ("all" === e.target.value) {
        return val;
      }
    });
    this.setState({
      filterArr: filterList
    });
  };

  render() {
    return (
      <div>
        <div className="pt-5">
          <div className="container mt-5 pt-5">
            <p className="display-4 text-center pt-5 -b-3">
              Please enter Item details
            </p>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6 offset-3">
                  <label htmlFor="">Item Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={e => this.inputNameHandler(e)}
                  />
                </div>
                <div className="form-group col-md-6 offset-3">
                  <label htmlFor="">Item Id</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.id}
                    onChange={e => this.inputIdHandler(e)}
                  />
                </div>
                <div className="form-group col-md-6 offset-3">
                  <label htmlFor="address">Item Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.desc}
                    onChange={e => this.inputDescHandler(e)}
                  />
                </div>
                <div className="form-group col-md-6 offset-3">
                  <label htmlFor="">Item Category</label>
                  <select
                    className="form-control"
                    onChange={e => this.inputCategoryHandler(e)}
                  >
                    <option value="Choose Post">Choose category</option>
                    <option value="vagetable">Vegetable</option>
                    <option value="fruit">Fruit</option>
                    <option value="bakery">Bakery</option>
                    <option value="snaks">Snacks</option>
                  </select>
                </div>
                <div className="form-group col-md-6 offset-3">
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.price}
                    onChange={e => this.inputPriceHandler(e)}
                  />
                </div>
                <div className="form-group col-md-6 offset-3">
                  <button
                    type="submit"
                    className="btn btn-dark w-100"
                    onClick={e => this.addToCart(e)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <select
            className="w-30 mb-3 py-2 px-3 bg-dark text-white"
            onChange={e => this.inputFilterHandler(e)}
          >
            <option value="Choose Post">Select category</option>
            <option value="all">All</option>
            <option value="vagetable">Vegetable</option>
            <option value="fruit">Fruit</option>
            <option value="bakery">Bakery</option>
            <option value="snaks">Snacks</option>
          </select>
        </div>
        <CartForm cartData={this.state.filterArr} sum={this.state.sum} />
      </div>
    );
  }
}

export default CartTable;
