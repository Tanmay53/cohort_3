import React, { Component } from "react";
import { connect } from "react-redux";
import { postAddProduct, fetchProdData } from "../../redux/prod/prod_action";
export class Insert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: 1,
      product_name: "",
      price: 0,
      img: "https://via.placeholder.com/150"
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    //   api call
    let config = {
      method: "POST",
      url: "http://localhost:5000/insert",
      data: this.state
    };
    this.setState({
      category_id: 1,
      product_name: "",
      price: 0,
      img: "https://via.placeholder.com/150"
    });
    const result = await this.props.postAddProduct(config);
    if (this.props.data) alert(this.props.data.message);
    config = {
      method: "GET",
      url: "http://localhost:5000/show_all"
    };
    const res = await this.props.fetchProdData(config);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h3 className="bg-success">Add New Product</h3>
        <form
          onSubmit={this.handleSubmit}
          className="form-group bg-light p-2 w-50 m-auto"
        >
          {this.props.categories && (
            <form className="form-control" onSubmit={this.handleSubmit}>
              <label htmlFor="category_id">Select Category</label>
              <select
                className="custom-select"
                name="category_id"
                onChange={this.handleChange}
                className="form-control"
              >
                <option selected>Categories</option>
                {this.props.categories.data.map(ele => (
                  <option value={ele["id"]} key={ele["id"]}>
                    {ele["category_name"]}
                  </option>
                ))}
              </select>
              <label htmlFor="product_name">Product Name</label>
              <input
                type="text"
                name="product_name"
                onChange={this.handleChange}
                className="form-control"
              />
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                onChange={this.handleChange}
                className="form-control"
              />
              <label htmlFor="img">Image URL</label>
              <input
                type="text"
                name="img"
                onChange={this.handleChange}
                className="form-control"
              />
              <button
                type="submit"
                className="btn btn-primary"
                onclick="this.disabled=true"
              >
                Subimt
              </button>
            </form>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.prod_reducer.msg,
    categories: state.prod_reducer.categories
  };
};
const mapDispatchToProps = { fetchProdData, postAddProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Insert);
