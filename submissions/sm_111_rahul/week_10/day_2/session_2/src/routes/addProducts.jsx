/** @format */
import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, addCategory } from "../redux/actions";

class AddProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      category: "",
      avatar: "",
      cost: 0,
      desc: "",
      quantity: 0,
      addedCategory: "",
      removeCategory: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleItemAdd = e => {
    e.preventDefault();
    const { productName, avatar, cost, desc, quantity, category } = this.state;
    let id = 7;
    let Item = {
      id: id++,
      name: productName,
      price: cost,
      avatar,
      desc,
      quantity,
      category
    };
    this.props.addItem(Item);
  };

  handleAddCategory = e => {
    e.preventDefault();
    const { addedCategory } = this.state;
    let id = 4;
    let category = {
      id: id++,
      categoryName: addedCategory
    };
    this.props.addCategory(category);
  };

  render() {
    console.log(this.state);
    const {
      productName,
      avatar,
      cost,
      desc,
      quantity,
      addedCategory
    } = this.state;
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-sm-11 col-md-8 col-lg-6 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-warning m-2"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add Item
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add Product
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="productName">Enter Product Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="productName"
                        id="productName"
                        placeholder="Name"
                        value={productName}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="quantity">Enter Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        id="quantity"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cost">Enter cost</label>
                      <input
                        type="number"
                        className="form-control"
                        name="cost"
                        id="cost"
                        placeholder="Cost"
                        value={cost}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="desc">Enter Description </label>
                      <input
                        type="text"
                        className="form-control"
                        name="desc"
                        id="desc"
                        placeholder="Desc"
                        value={desc}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="category">Select Category</label>
                      <select
                        className="form-control"
                        name="category"
                        id="category"
                        onChange={this.handleChange}
                      >
                        <option>Choose</option>
                        {this.props.productCategory &&
                          this.props.productCategory.map(category => {
                            return (
                              <option
                                key={category.id}
                                value={category.categoryName}
                              >
                                {category.categoryName}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="avatar">Add Product's Image Url</label>
                      <input
                        type="text"
                        className="form-control"
                        name="avatar"
                        id="avatar"
                        placeholder="Image Url"
                        value={avatar}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={this.handleItemAdd}
                    >
                      Save Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className="btn btn-warning m-2">Edit Item</button> */}
            <button
              className="btn btn-warning m-2"
              type="button"
              data-target="#addCategory"
              data-toggle="modal"
            >
              Add Category
            </button>

            <div
              className="modal fade"
              id="addCategory"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="#exampleModalLabel1"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel1">
                      Add Category
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="addedCategory">Enter Category Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="addedCategory"
                        id="addedCategory"
                        placeholder="Name"
                        value={addedCategory}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.handleAddCategory}
                      data-dismiss="modal"
                    >
                      Save Category
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <button className="btn btn-danger m-2">Remove Item</button> */}
            <button
              className="btn btn-danger m-2"
              type="button"
              data-target="#removeCategory"
              data-toggle="modal"
            >
              Remove Category
            </button>
            <div
              className="modal fade"
              id="removeCategory"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="#exampleModalLabel2"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel2">
                      Remove Category
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="removeCategory">Select Category</label>
                      <select
                        className="form-control"
                        name="removeCategory"
                        id="removeCategory"
                        onChange={this.handleChange}
                      >
                        <option>Choose</option>
                        {this.props.productCategory &&
                          this.props.productCategory.map(category => {
                            return (
                              <option
                                key={category.id}
                                value={category.categoryName}
                              >
                                {category.categoryName}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" className="btn btn-primary">
                      Remove Category
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productCategory: state.productCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: payload => dispatch(addItem(payload)),
    addCategory: payload => dispatch(addCategory(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
