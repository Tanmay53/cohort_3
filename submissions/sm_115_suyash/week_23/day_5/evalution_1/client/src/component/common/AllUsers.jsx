import React, { Component } from "react";
import { connect } from "react-redux";
import { followNewUser, fetchAllUsers } from "../../redux/action";

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      follower_id: 0
    };
  }
  componentDidMount = () => {
    if (this.props.user != undefined) {
      let obj = {
        id: this.props.user.id
      };
      this.props.fetchAllUsers(obj);
    }
  };
  follow = id => {
    this.setState(
      {
        userId: this.props.user.id,
        follower_id: id
      },
      () => {
        followNewUser(this.state);
      }
    );
  };

  render() {
    console.log(this.props.allUsers);
    return (
      <div>
        {this.props.allUsers != undefined ? (
          this.props.allUsers.map(ele => {
            return (
              <p>
                <span>{ele.name} </span>
                <button onClick={() => this.follow(ele.id)}>Follow</button>
              </p>
            );
          })
        ) : (
          <></>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  allUsers: state.allUsers
});

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: payload => dispatch(fetchAllUsers(payload)),
  followNewUser: payload => dispatch(followNewUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
