import React from "react";
import { connect } from "react-redux";
import { addFollower } from "../redux/actions/auth";

function UserCard({ username, imgURL, userid, id, addFollower, update }) {
  const submitFollower = () => {
    addFollower({ id, userid });
  };

  return (
    <div className="card col-lg-3 col-sm-1 col-md-4 p-3 m-4">
      <img
        src={
          imgURL ||
          "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png"
        }
        className="mx-auto"
        style={{ height: "80px", width: "80px", borderRadius: "50%" }}
      ></img>
      <span style={{ fontSize: "1.5rem", margin: "1rem 0" }}>{username}</span>
      <button className="btn btn-primary" onClick={() => submitFollower()}>
        Follow
      </button>
    </div>
  );
}

export default connect(null, { addFollower })(UserCard);
