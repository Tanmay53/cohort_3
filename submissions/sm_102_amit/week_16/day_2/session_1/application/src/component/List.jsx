import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Table, ButtonGroup, Pagination } from "react-bootstrap";

class List extends Component {
  // changePage = () => {
  //   const query = new URLSearchParams(this.props.location.search);
  //   let data = {
  //     page: query.get("page"),
  //     limit: query.get("limit")
  //   };
  //   this.props.getParams(data);
  // };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.search !== prevProps.location.search) {
      const query = new URLSearchParams(this.props.location.search);
      let data = {
        page: query.get("page"),
        limit: query.get("limit")
      };
      this.props.getParams(data);
    }
  }
  render() {
    const {
      data: { users }
    } = this.props;
    const userList = users.length ? (
      users.map((user, i) => (
        <tr key={i}>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.mobile}</td>
          <td>{user.age}</td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Link to={`change/${i + 1}`} className="btn btn-sm btn-primary">
                EDIT
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
        <td colSpan="6">No result found!</td>
      </tr>
    );

    // pagination
    const {
      data: { totalPages, page, size },
      match
    } = this.props;
    let active = page;
    let items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <li key={i} className={`page-item ${i === active ? "active" : null}`}>
          <Link
            to={`${match.url}?page=${i}&limit=${size}`}
            className="page-link"
          >
            {i}
          </Link>
        </li>
      );
    }

    const pagination = <Pagination size="sm">{items}</Pagination>;

    // return
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <li>
              <Link
                to={`${match.url}?page=1&limit=10`}
                className="dropdown-item"
              >
                10
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}?page=1&limit=25`}
                className="dropdown-item"
              >
                25
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}?page=1&limit=50`}
                className="dropdown-item"
              >
                50
              </Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        <hr />
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Phone No.</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </Table>
        <div>{pagination}</div>
      </>
    );
  }
}

export default List;
