import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import uuid from "uuid-random";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTweets: [],
      email: ""
    };

    this.token = localStorage.getItem("token");
    this.baseURL = "http://localhost:5000";
    this.fetchAllBlogsURL = "/tweet/fetch/all-tweets";
    this.followUserURL = "/follow";
  }

  fetchAllTweets = () => {
    const config = {
      baseURL: this.baseURL,
      url: this.fetchAllBlogsURL,
      headers: { Authorization: `Bearer ${this.token}` },
      method: "GET",
      timeout: 10000
    };

    axios(config)
      .then(res => {
        this.setState({
          allTweets: res.data.tweets.reverse()
        });
      })
      .catch(err => {
        console.log(err.message);
        // alert("Tweet fetch failed." + err.message);
      });
  };

  componentDidMount() {
    this.fetchAllTweets();
  }

  namePascalCase = name => {
    name = name.split(" ");
    let pascalCaseName = [];

    for (let i = 0; i < name.length; i++) {
      let word = "";
      for (let j = 0; j < name[i].length; j++) {
        if (j === 0) {
          word += name[i][j].toUpperCase();
        } else {
          word += name[i][j];
        }
      }
      pascalCaseName.push(word);
    }

    return pascalCaseName.join(" ");
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  followUser = event => {
    event.preventDefault();

    const config = {
      baseURL: this.baseURL,
      url: this.followUserURL,
      headers: { Authorization: `Bearer ${this.token}` },
      method: "POST",
      timeout: 10000,
      data: { email: this.state.email }
    };

    axios(config)
      .then(res => {
        if (res.data.status === 200) {
          alert(res.data.message);
          this.setState({
            email: ""
          });
        } else if (res.data.status === 400) {
          alert(res.data.message);
        }
      })
      .catch(err => {
        console.log(err.message);
        alert("Following failed");
      });
  };

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <h2 className="mt-3 mb-4">ALL TWEETS</h2>
          <div className="row text-center justify-content-center">
            <div className="mr-3">
              <h4>Follow User</h4>
            </div>
            <input
              className="mr-3 p-1"
              type="text"
              placeholder="Enter email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
            <button className="btn btn-primary" onClick={this.followUser}>
              Follow
            </button>
          </div>
          <div className="row">
            {this.state.allTweets.map(tweet => {
              return (
                <div
                  className="container col-5 shadow border my-4 p-4"
                  key={uuid()}
                >
                  <div className="row">
                    <div className="border border-dark text-center">
                      <h1 className="px-2">#{tweet.id}</h1>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <h5 className="text-justify">{tweet.content}</h5>
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
                  <div className="row justify-content-between mt-4">
                    <div className="row">
                      <img
                        className="ml-2"
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
                      <div className="col align-self-center">
                        <div className="text-left border-bottom border-dark">
                          Tweeter :
                        </div>
                        <div className="text-left border-bottom border-dark">
                          {this.namePascalCase(tweet.name)}
                        </div>
                      </div>
                    </div>
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

export default connect(mapStateToProps)(Home);
