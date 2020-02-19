/** @format */

import React, { Component } from "react";
import Cart from "./cart";
import { filterProducts } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all",
      filterData: []
    };
  }

  componentDidUpdate = prevP => {
    console.log(this.props.filteredProducts);
    if (this.props.filteredProducts != prevP.filteredProducts) {
      this.setState({
        filterData: this.props.filteredProducts
      });
    }
  };
  handleChange = e => {
    this.setState(
      {
        category: e.target.value
      },
      () => {
        console.log(this.state.category);
        this.props.filterProducts(this.state.category);
      }
    );
  };
  render() {
    var data = [];
    if (this.props.filteredProducts.length == 0) {
      data = this.props.products;
    } else {
      data = this.state.filterData;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex flex-row justify-content-center">
            <Link className="btn btn-warning m-2" to="/cart">
              Cart
            </Link>
            <Link className="btn btn-warning m-2" to="/addProducts">
              Add Products
            </Link>
            <Link className="btn btn-warning m-2" to="/orders">
              Orders
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-7 col-lg-5  ">
            <div className="form-group">
              <label htmlFor="selectCategory">Select Category</label>
              <select
                className="form-control"
                name="category"
                id="category"
                onChange={this.handleChange}
              >
                <option value="all">All</option>
                {this.props.productCategory.map(ele => {
                  return (
                    <option key={ele.id} value={ele.categoryName}>
                      {ele.categoryName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-11 col-md-8 col-lg-9">
            <div className="d-flex flex-row flex-wrap justify-content-center">
              {data.map(ele => {
                return (
                  <div
                    className="card"
                    key={ele.id}
                    style={{ maxWidth: "400px", margin: "5px" }}
                  >
                    <img
                      className="card-img-top"
                      src={ele.avatar}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text"></p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-11 col-md-8 col-lg-3">{/* <Cart /> */}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    productCategory: state.productCategory,
    filteredProducts: state.filteredProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterProducts: payload => dispatch(filterProducts(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
