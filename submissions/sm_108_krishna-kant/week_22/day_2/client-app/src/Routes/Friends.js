import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnfollowedMember } from "../redux/actions/auth";
import UserCard from "../component/UserCard";

class Friends extends Component {
  componentDidMount() {
    const { getUnfollowedMember, user } = this.props;

    getUnfollowedMember(user.id);
  }

  render() {
    const { members, loading, user } = this.props;
    return (
      <div className="row justify-content-center align-items-center">
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          members.map(member => (
            <UserCard
              key={member.id}
              id={member.id}
              userid={user.id}
              username={member.username}
            ></UserCard>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  members: state.auth.unfollowed,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { getUnfollowedMember })(Friends);
