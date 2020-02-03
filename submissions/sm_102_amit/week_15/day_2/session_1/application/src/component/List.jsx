import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, ButtonGroup } from "react-bootstrap";
// import Axios from "axios";

class List extends Component {
  render() {
    // console.log(this.props);
    const { items } = this.props;
    const itemList = items.length ? (
      items.map((item, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.item}</td>
          <td>{item.quantity}</td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Link to={`change/${i + 1}`} className="btn btn-sm btn-primary">
                EDIT
              </Link>
              <Link
                to={`mark/${i + 1}`}
                className={`btn btn-sm ${
                  item.purchased === "True" ? "btn-success" : "btn-warning"
                }`}
              >
                PURCHASE
              </Link>
              <Link to={`delete/${i + 1}`} className="btn btn-sm btn-danger">
                DELETE
              </Link>
            </ButtonGroup>
          </td>
        </tr>
      ))
    ) : (
      <tr className="text-center">
        <td colSpan="4">No result found!</td>
      </tr>
    );
    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{itemList}</tbody>
      </Table>
    );
  }
}

export default List;
