/** @format */

import React, { Component } from "react";
class GithubTable extends Component {
  render() {
    return (
      <main className="container-fluid bg-danger text-light">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name/UserId</th>
              <th>Score</th>
              <th>More Details</th>
              <th>Image</th>
            </tr>
          </thead>
          {console.log(this.props.items)}
          <tbody id="tBody" className="text-light">
            {this.props.items.map(ele => {
              return (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.login}</td>
                  <td>{ele.score}</td>
                  <td>
                    <button
                      className="btn btn-primary "
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Get Details
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title text-dark"
                              id="exampleModalLabel"
                            >
                              User's Insight
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body text-dark">
                            <div>
                              {ele.login}'s score : {ele.score}
                            </div>
                            <div>
                              {ele.login}'s type : {ele.type}
                            </div>
                            <div>
                              {ele.login}'s repos :{" "}
                              <a href={ele.html_url}>click to get repos</a>
                            </div>
                            <div></div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      height="160px"
                      width="140px"
                      src={ele.avatar_url}
                      alt="user's pic"
                    ></img>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}

export default GithubTable;
