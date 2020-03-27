import React, { Component } from "react";
import { connect } from "react-redux";

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    console.log(user, "===user profile");
    return (
      <div>
        <h2>Profile</h2>
        <ul style={{ listStyle: "none", marginLeft: "1rem" }}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(UserProfile);
