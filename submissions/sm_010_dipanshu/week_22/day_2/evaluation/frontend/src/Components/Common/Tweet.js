import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class Tweet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetContent: ""
    };

    this.token = localStorage.getItem("token");
    this.baseURL = "http://localhost:5000";
    this.createTweetURL = "/tweet/create";
  }

  createTweetCall = () => {
    const config = {
      baseURL: this.baseURL,
      url: this.createTweetURL,
      headers: { Authorization: `Bearer ${this.token}` },
      method: "POST",
      timeout: 10000,
      data: this.state
    };

    axios(config)
      .then(res => {
        if (res.data.status === 200) {
          alert(res.data.message);
          this.setState({
            tweetContent: ""
          });
        }
      })
      .catch(err => {
        console.log(err.message);
        alert("Tweeting failed");
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  createTweet = event => {
    event.preventDefault();
    if (this.state.tweetContent !== "") {
      this.createTweetCall();
    } else {
      alert("Please fill tweet content");
    }
  };

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <h2 className="mt-3">TWEET</h2>
          <form className="p-3 col-6 mx-auto">
            <div className="form-row">
              <div className="form-group col-12">
                <textarea
                  className="form-control rounded-0"
                  id="tweetContent"
                  rows="10"
                  placeholder="Tweet goes here..."
                  value={this.state.tweetContent}
                  onChange={this.handleChange}
                ></textarea>
                <div className="form-group d-flex justify-content-between">
                  <Link to="/my-tweets">
                    <button className="btn btn-danger mt-4 rounded-0">
                      My Tweets
                    </button>
                  </Link>
                  <button
                    className="btn btn-primary mt-4 ml-auto rounded-0"
                    onClick={this.createTweet}
                  >
                    Tweet This
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps)(Tweet);
