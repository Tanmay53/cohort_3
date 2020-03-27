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

  changePage = e => {
    if (e.target.value === "prv") {
      if (this.props.user != undefined) {
        let obj = {
          user_id: this.props.user.id,
          page: this.props.prv
        };
        this.props.fetchFollowingTweets(obj);
      }
    } else {
      if (this.props.user != undefined) {
        let obj = {
          user_id: this.props.user.id,
          page: this.props.nxt
        };
        this.props.fetchFollowingTweets(obj);
      }
    }
  };
  render() {
    return (
      <div>
        <h1 className="text-center">All Tweets</h1>
        <p>
          <Link className="ml-3" to="/profile">
            Go to your Profile
          </Link>
        </p>
        <div className="d-flex flex-wrap">
          {this.props.followingData != undefined ? (
            this.props.followingData.map(ele => {
              return (
                <div
                  key={ele.id}
                  className="card text-white bg-info mb-3 mx-3 w-100"
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
        <button
          className="ml-3 px-3 py-2 text-white btn-dark"
          value="prv"
          onClick={this.changePage}
        >
          Prev
        </button>
        <button
          className="ml-3 px-3 py-2 text-white btn-dark"
          value="nxt"
          onClick={this.changePage}
        >
          Next
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  followingData: state.followingData,
  prv: state.prv,
  nxt: state.nxt
});

const mapDispatchToProps = dispatch => ({
  fetchFollowingTweets: payload => dispatch(fetchFollowingTweets(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
