import React from "react";
import { Link } from "react-router-dom";
import Banner from "../common/Banner";

const ProductCard = props => {
  return (
    <div className="col-md-3 py-3">
      <div className="card shadow">
        <img
          src="https://placeimg.com/500/600/any"
          className="card-img-top img-fluid"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title h6">
            {props.data.name}{" "}
            <button
              className="btn btn-sm btn-outline-success float-right"
              style={{ marginTop: "-8px" }}
            >
              <i className="fa fa-plus"></i>&nbsp;Add
            </button>
          </h5>
          <p>
            <small className="card-text">
              <i className="fa fa-inr"></i>&nbsp;{props.data.price}
            </small>
          </p>
          {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
        </div>
      </div>
    </div>
  );
};

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      men: [
        {
          id: 1,
          name: "Shirt 1",
          price: "500.00"
        },
        {
          id: 2,
          name: "Shirt 2",
          price: "600.00"
        },
        {
          id: 3,
          name: "Shirt 3",
          price: "800.00"
        },
        {
          id: 4,
          name: "Shirt 4",
          price: "400.00"
        }
      ],
      women: [
        {
          id: 1,
          name: "Women 1"
        },
        {
          id: 2,
          name: "Women 2"
        }
      ]
    };
  }

  render() {
    if (this.props.name === "men") {
      return (
        <React.Fragment>
          <Banner name="Men's" />
          <div className="container py-5">
            <h2 className="text-center mb-5">Men's Section </h2>
            <div className="row">
              {this.state.men.map(obj => (
                <ProductCard key={obj.id} data={obj} />
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.props.name === "women") {
      return (
        <React.Fragment>
          <Banner name="Women's" />
          <div className="container py-5">
            <h2 className="text-center mb-5">Women's Section </h2>
            <div className="row">
              {this.state.women.map(obj => (
                <ProductCard key={obj.id} data={obj} />
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Banner name="Products" />
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 ">
                <img
                  src="https://placeimg.com/500/500/any"
                  className="card-img-top img-fluid shadow-lg"
                  alt="products"
                />
                <h3 className="text-center my-5 display-4">
                  <Link to="/product/men">Men's Product</Link>
                </h3>
              </div>
              <div className="col-md-6 shadow-regular">
                <img
                  src="https://placeimg.com/500/500/any"
                  className="card-img-top img-fluid shadow-lg"
                  alt="products"
                />
                <h3 className="text-center my-5 display-4">
                  <Link to="/product/women">Women's Product</Link>
                </h3>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Product;
