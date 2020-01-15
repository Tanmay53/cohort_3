/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addUser, deleteUser, sortUsers } from "../redux/actions";
import UserTable from "./userTable";

class ViewAllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asc: false
    };
  }

  handleSort = () => {
    this.setState({
      asc: !this.state.asc
    });
    const { data, sortUsers } = this.props;
    if (this.state.asc) {
      sortUsers(data, "asc");
    } else {
      sortUsers(data, "desc");
    }
  };

  render() {
    const { data, deleteUser, match } = this.props;

    if (data.length === 0) {
      return (
        <h1 className="p-5 bg-danger text-white">
          empty
          <Link to="/addUser">Go Back</Link>
        </h1>
      );
    } else {
      return (
        <UserTable
          data={data}
          deleteUser={deleteUser}
          handleSort={this.handleSort}
          match={match}
          {...this.props}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user)),
    deleteUser: id => dispatch(deleteUser(id)),
    sortUsers: (data, typeSort) => dispatch(sortUsers(data, typeSort))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllUsers);
