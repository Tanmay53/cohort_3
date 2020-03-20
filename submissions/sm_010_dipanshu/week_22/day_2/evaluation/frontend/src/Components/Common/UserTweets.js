import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import uuid from "uuid-random";

class UserTweets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allUserTweets: []
    };

    this.token = localStorage.getItem("token");
    this.baseURL = "http://localhost:5000";
    this.fetchBlogURL = "/tweet/fetch/user-tweets";
  }

  fetchUserTweets = () => {
    const config = {
      baseURL: this.baseURL,
      url: this.fetchBlogURL,
      headers: { Authorization: `Bearer ${this.token}` },
      method: "GET",
      timeout: 10000
    };

    axios(config)
      .then(res => {
        this.setState({
          allUserTweets: res.data.tweets.reverse()
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  componentDidMount() {
    this.fetchUserTweets();
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <h2 className="mt-3">YOUR TWEETS</h2>
          <div className="row">
            {this.state.allUserTweets.map((tweet, index) => {
              return (
                <div
                  className="container col-5 border shadow my-3 p-4"
                  key={uuid()}
                >
                  <div className="row">
                    <div className="border border-dark text-center align-self-center">
                      <h1 className="px-2">#{tweet.id}</h1>
                    </div>
                    <img
                      className="ml-auto"
                      src={
                        tweet.image_url === ""
                          ? "/static/user_stock_image.png"
                          : tweet.image_url
                      }
                      width="100px"
                      height="100px"
                      alt="User"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className="row mt-3">
                    <p className="text-primary text-justify">{tweet.content}</p>
                  </div>
                  <div className="row mt-3">
                    <h5 className="small">
                      Tweeted On :{" "}
                      {tweet.time_created
                        .split(" ")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps)(UserTweets);
