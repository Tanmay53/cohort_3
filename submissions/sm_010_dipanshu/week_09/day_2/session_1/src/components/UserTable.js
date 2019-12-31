import React from "react";
import axios from "axios";

class UserTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: this.props.result
    };

    this.userNumber = null;
  }

  handleMoreInfo = event => {
    this.userNumber = Number(event.target.getAttribute("idx"));
    console.log(this.state.result);
    console.log("User Number Clicked =>", this.userNumber);
    let selectedUser = this.state.result.filter((element, index) => {
      return index === this.userNumber;
    });
    console.log(selectedUser[0].url);

    let url = selectedUser[0].url;

    this.fetchUserDetails(url);
  };

  fetchUserDetails = async url => {
    console.log("Searching github for url", url);
    await axios
      .get(url)
      .then(res => {
        console.log("Calling API to get more info about user from url", url);
        console.table(res.data);
        let resultFromAPI = res.data;

        console.log("resultsFromAPI", resultFromAPI);

        console.log("Lifting state up to parent from user table component");
        this.props.returnFunction(this.userNumber, resultFromAPI);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="mt-5 shadow shadow-lg table-striped table-bordered table-responsive table-hover p-0 mb-5">
          <table className="table mb-0">
            <thead className="thead-dark">
              <tr>
                <th>Login</th>
                <th>ID</th>
                <th>Image</th>
                <th>Profile</th>
                <th>Repositories</th>
                <th>Score</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.result.map((obj, index) => {
                return (
                  <tr key={obj.id + index}>
                    <th className="align-middle">{obj.login}</th>
                    <td className="align-middle">{obj.id}</td>
                    <td className="align-middle text-center">
                      <img
                        src={obj.avatar_url}
                        alt="User"
                        className="rounded-circle"
                        style={{ width: 40 }}
                      ></img>
                    </td>
                    <td className="align-middle">
                      <a
                        href={obj.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {obj.html_url}
                      </a>
                    </td>
                    <td className="align-middle">
                      <a
                        href={obj.repos_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {obj.repos_url}
                      </a>
                    </td>
                    <td className="align-middle">{obj.score.toFixed(2)}</td>
                    <td className="align-middle">
                      <button
                        className="btn btn-sm btn-info mr-3"
                        idx={index}
                        onClick={this.handleMoreInfo}
                      >
                        More
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserTable;
