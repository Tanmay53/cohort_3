import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFeeds } from "../redux/actions/tweets";
import Feed from "../component/Feed";
class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchFeeds(this.props.user.id);
  }
  render() {
    const { feeds, loading } = this.props;
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
            {feeds.map((feed, index) => (
              <Feed
                key={index}
                title={feed.title}
                body={feed.body}
                created_at={feed.created_at}
              ></Feed>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feeds: state.tweets.feeds,
  loading: state.tweets.loading,
  user: state.auth.user
});

export default connect(mapStateToProps, { fetchFeeds })(Dashboard);
