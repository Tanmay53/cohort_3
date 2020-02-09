import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
// import { Button } from 'antd';

export default class PurchasedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchasedListItems: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/purchased")
      .then(res => {
        this.setState({
          purchasedListItems: res.data
        });
      })
      .catch(err => console.log(err));
  };

  cancleOrder = () => {
    swal("Sorry! this order is not refundable");
  };
  render() {
    console.log(this.state.purchasedListItems);
    return (
      <div className="d-flex flex-wrap">
        {this.state.purchasedListItems == "No item is purchased" ? (
          <div className="w-100">
            <h4 className="display-4 m-auto text-center mt-5 pt-3 pb-5">
              NO Item Found !!!!!
            </h4>
            <Link
              to="/"
              className="text-white my-btn text-center py-2 px-3 ml-3 mt-3"
            >
              Go To Cart
            </Link>
          </div>
        ) : (
          this.state.purchasedListItems.map(item => {
            return (
              <div key={item.item} className="card shadow mx-3 my-3 card_item">
                <div className="card-body">
                  <h5 className="card-title text-center">Item: {item.item}</h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    Quantity: {item.quantity}
                  </h6>
                  <p className="card-text">Your order is dispatched</p>
                  <p className="card-text font-weight-bold">
                    Order No: #{Date.now()}
                  </p>

                  <Link
                    className="card-link"
                    to="/showcart"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Show Details
                  </Link>

                  <div
                    className="modal fade"
                    id="exampleModalCenter"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalCenterTitle"
                          >
                            Order No: {Date.now()}
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
                          <p>Item is shipped</p>
                          <p>
                            Predictable Delivery Date:{" "}
                            {new Date().getDate() + 2}/{new Date().getMonth()}/
                            {new Date().getFullYear()}
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            onClick={this.cancleOrder}
                            type="button"
                            className="btn btn-danger"
                          >
                            Cancle Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/" className="card-link float-right">
                    Go back
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
