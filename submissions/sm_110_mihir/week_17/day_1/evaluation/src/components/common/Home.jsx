import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { atHome } from "../../redux/action";
import Card from "./Card";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  componentWillUnmount() {
    localStorage.setItem("meeting", JSON.stringify(this.props.data));
  }

  priceAsc = () => {
    let temp = this.state.data.sort((a, b) => a.price - b.price);
    this.setState({
      data: temp
    });
  };
  priceDsc = () => {
    let temp = this.state.data.sort((a, b) => b.price - a.price);
    this.setState({
      data: temp
    });
  };
  capacityAsc = () => {
    let temp = this.state.data.sort((a, b) => a.capacity - b.capacity);
    this.setState({
      data: temp
    });
  };
  capacityDsc = () => {
    let temp = this.state.data.sort((a, b) => b.capacity - a.capacity);
    this.setState({
      data: temp
    });
  };
  render() {
    this.props.atHome();
    let resultPerPage = 5; //given
    let totalPages = Math.ceil(this.state.data.length / resultPerPage);
    let query = new URLSearchParams(this.props.location.search);
    let currPage = query.get("page") || 1;
    let prevPageEnd = (currPage - 1) * resultPerPage;
    let currPageEnd = currPage * resultPerPage;
    let currPageItems = [];
    for (let i = prevPageEnd; i < currPageEnd; i++)
      currPageItems.push(this.state.data[i]);
    console.log(currPageItems);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return (
      <div>
        <h1>Home Page</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-1">Pages</div>
            <div className="col-5">
              <ul className="pagination">
                {pages.map(ele => (
                  <li className="page-item" key={ele}>
                    <Link to={`/?page=${ele}`} className="page-link">
                      {ele}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-2">
              <div className="row">
                <div className="col-4">Price</div>
                <div className="col-2">
                  <button className="btn btn-primary" onClick={this.priceAsc}>
                    <i class="fas fa-sort-up"></i>
                  </button>
                </div>
                <div className="col-2">
                  <button className="btn btn-primary" onClick={this.priceDsc}>
                    <i class="fas fa-sort-down"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="row">
                <div className="col-5">Capacity</div>
                <div className="col-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.capacityAsc}
                  >
                    <i class="fas fa-sort-up"></i>
                  </button>
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.capacityDsc}
                  >
                    <i class="fas fa-sort-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck">
            {currPageItems.map(ele =>
              ele.available ? (
                <Link to={`/booking?id=${ele.id}`}>
                  <Card data={ele} key={ele.id} />
                </Link>
              ) : (
                <Card data={ele} key={ele.id} />
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.rooms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    atHome: () => dispatch(atHome())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
