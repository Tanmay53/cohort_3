import React from "react";
import Axios from "axios";

const Repos = props => {
  return (
    <button className="btn btn-info" value={props.data} onClick={showRepos}>
      Show repos
    </button>
  );
};

const showRepos = e => {
  Axios.get(e.target.value)
    .then(res => {
      const repos = res;
      return <h2>Show me </h2>;
    })
    .catch(err => console.log(err.message));
};

export default Repos;
