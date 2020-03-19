import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMy } from "../redux/actions/tweets";
import Feed from "../component/Feed";
import { Link } from "react-router-dom";
class Myfeed extends Component {
  componentDidMount() {
    this.props.fetchMy(this.props.user.id);
  }
  render() {
    const { tweets, loading } = this.props;
    return (
      <div className="p-5">
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {tweets.length > 0 ? (
              tweets.map((tweet, index) => (
                <Feed
                  key={index}
                  title={tweet.title}
                  body={tweet.body}
                  created_at={tweet.created_at}
                ></Feed>
              ))
            ) : (
              <div>
                <h1>No Tweets Founds of you</h1>
                <Link to="/add-tweet" className="btn btn-primary">
                  Add Tweet
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets.tweets,
  loading: state.tweets.loading,
  user: state.auth.user
});

export default connect(mapStateToProps, { fetchMy })(Myfeed);
