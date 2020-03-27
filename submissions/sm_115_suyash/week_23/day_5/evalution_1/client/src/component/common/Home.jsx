import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFollowingTweets } from "../../redux/action";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    if (this.props.user != undefined) {
      let obj = {
        user_id: this.props.user.id
      };
      this.props.fetchFollowingTweets(obj);
    }
  };

  render() {
    return (
      <div>
        <h1>All Tweets</h1>
        <p>
          <Link to="/profile">Go to your Profile</Link>
        </p>
        {this.props.followingData != undefined ? (
          this.props.followingData.map(ele => {
            return (
              <div
                key={ele.id}
                className="card text-white bg-info mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Tweet</div>
                <div className="card-body">
                  <h5 className="card-title">{ele.posts}</h5>
                </div>
              </div>
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
  followingData: state.followingData
});

const mapDispatchToProps = dispatch => ({
  fetchFollowingTweets: payload => dispatch(fetchFollowingTweets(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
