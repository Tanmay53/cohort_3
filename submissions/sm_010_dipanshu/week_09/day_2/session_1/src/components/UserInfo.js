import React from "react";

class UserInfo extends React.Component {
  render() {
    if (this.props.profile !== null) {
      return (
        <div className="card mt-5 shadow shadow-lg">
          <img
            className="card-img-top rounded-circle mx-auto mt-3"
            style={{ width: 250 }}
            src={this.props.profile.avatar_url}
            alt={this.props.profile.login}
          />
          <div className="card-body text-center">
            <h3 className="card-title">{this.props.profile.login}</h3>
            <p className="card-text">
              Public Repos : {this.props.profile.public_repos}
            </p>
            <p className="card-text">
              Followers : {this.props.profile.followers}
            </p>
            <p className="card-text">
              Following : {this.props.profile.following}
            </p>
          </div>
        </div>
      );
    } else return null;
  }
}

export default UserInfo;
