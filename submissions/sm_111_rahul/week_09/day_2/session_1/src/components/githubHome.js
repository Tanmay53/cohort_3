/** @format */

import React, { Component } from "react";
import GithubTable from "./githubTable";
import axios from "axios";
import Repos from './githubRepos';
class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      users: [],
      repos: [],
      userFlag :false,
    };
  }

  getData = () => {
    let searchK = this.state.searchKey;
    axios
      .get(`https://api.github.com/search/users?q=${searchK}`)
      .then(res => {
        const data = res.data.items;
        this.setState({
          users: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getRepos = () => {
    let searchK = this.state.searchKey;
    axios
      .get(`https://api.github.com/search/repositories?q=language:${searchK}`)
      .then(res => {
        const data = res.data.items;
        this.setState({
          repos: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleChangeUser = e => {
    this.setState({
      searchKey: e.target.value
    });
  };https://www.hackerrank.com/contests/cohort-3-module-5-4-3-2/challenges
  handleChangeRepos = e => {
    this.setState({
      searchKey: e.target.value
    });
  };
  submitUsers = e => {
    e.preventDefault();
    this.getData();
    this.setState({
      userFlag:true
    })
  };
  submitRepos = e => {
    e.preventDefault();
    this.getRepos();
    this.setState({
      userFlag : false,
    })
  }

  render() {
          
    return (
      <div>
        <header className="container dark text-center my-4">
          <div className="row justify-content-center">
            <h1 className="display-4 warning col-12">
              GitHub Repo/Users Search
            </h1>
            <form className="col-6" onSubmit={this.submitUsers}>
              <div className="form-group p-2">
                <label htmlFor="users" className="h1 text-info">
                  Search Users
                </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleChangeUser}
                  placeholder="Search users"
                  id="users"
                />
                 <button className="btn-lg btn-success m-4" type="submit">
                  Search
                </button>
              </div>
            </form>
            <form className="col-6" onSubmit={this.submitRepos}>
              <div className="form-group p-2">
                <label htmlFor="repos" className="h1 text-info">
                  Search Repos
                </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleChangeRepos}
                  placeholder="Search repos by language"
                  id="repos"
                />
                <button className="btn-lg btn-success m-4" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </header>
        
          <div>
           { 
            (this.state.userFlag) ? 
           <GithubTable items={this.state.users} /> : 
           <Repos items = {this.state.repos} />
           }
          </div>
      </div>
    );
  }
}

export default Github;
