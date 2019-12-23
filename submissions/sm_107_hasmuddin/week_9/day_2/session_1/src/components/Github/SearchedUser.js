import React from "react";

function SearchedUser(props) {
  return (
    <div
      className="card m-2 d-flex justify-content-center align-items-center text-center"
      style={{ width: "18rem" }}
    >
      <img
        src={props.data.avatar_url}
        className="card-img-top rounded-circle img-size "
        alt="pic"
      />
      <div className="card-body">
        <h5 className="card-title">{props.data.login}</h5>
        <p className="card-text">Score : {Math.round(props.data.score)}</p>
        <button
          onClick={() => {
            return props.click(props.data.repos_url, props.data.url);
          }}
          className="btn btn-primary"
        >
          Profile
        </button>
      </div>
    </div>
  );
}
export default SearchedUser;
