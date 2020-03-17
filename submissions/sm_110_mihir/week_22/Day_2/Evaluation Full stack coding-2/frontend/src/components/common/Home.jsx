import { connect } from "react-redux";
import { fetchProdData, fetchCatData } from "../../redux/prod/prod_action";
import { Link } from "react-router-dom";
import Card from "./Card";

import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    // this.state={
    //   category_id=1
    // }
  }
  componentDidMount() {
    let config = {
      method: "GET",
      url: "http://localhost:5000/show_all"
    };
    const result = this.props.fetchProdData(config);
    console.log(result);
    config = {
      method: "GET",
      url: "http://localhost:5000/categories"
    };
    const result2 = this.props.fetchCatData(config);
  }
  handleFilter = async e => {
    this.setState({
      category_id: e.target.value
    });
    const config = {
      method: "POST",
      url: "http://localhost:5000/filter",
      data: {
        category_id: e.target.value
      }
    };
    const result = await this.props.fetchProdData(config);
  };

  handleSort = async e => {
    e.preventDefault();
    const config = {
      method: "GET",
      url: "http://localhost:5000/show_sorted"
    };
    const result = await this.props.fetchProdData(config);
  };
  render() {
    // if (!this.props.data.data) return null;
    return (
      <div>
        <h3 className="bg-primary text-white text center p-3">
          Evaluation Full stack CRUD coding-2
        </h3>
        <div className="container-fluid">
          <div className="bg-light text-left p-2 row">
            <div className="col-4">
              Howdy, dear {this.props.user.username}{" "}
              <div className="text-muted">
                {this.props.user.is_admin ? "Admin" : "User"}
              </div>
              {this.props.user.is_admin ? (
                <Link to="/insert">
                  <button className="btn btn-primary">Add new Product</button>
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="col-4">
              {this.props.categories && (
                <select className="custom-select" onChange={this.handleFilter}>
                  <option selected>Categories</option>
                  {this.props.categories.data.map(ele => (
                    <option value={ele["id"]} key={ele["id"]}>
                      {ele["category_name"]}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="col-2">
              Sort by price:
              <button className="btn btn-primary" onClick={this.handleSort}>
                <i class="fas fa-sort-down"></i>
              </button>
            </div>
            <div className="col-2">
              <a href="http://localhost:3000/">
                <button className="btn btn-success ml-1">Logout</button>
              </a>
            </div>
          </div>
        </div>

        {this.props.data.data && (
          <div className="card-deck">
            {this.props.data.data.map(ele => (
              <Card
                product_name={ele["product_name"]}
                price={ele["price"]}
                img={ele["img"]}
                category_name={ele["category_name"]}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.prod_reducer.data,
    // status: state.propd_reducer.status
    user: state.auth_reducer.data.data,
    categories: state.prod_reducer.categories
  };
};
const mapDispatchToProps = { fetchProdData, fetchCatData };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
