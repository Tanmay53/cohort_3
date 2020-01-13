import React from "react";
import GithubTable from "./GithubTable";

function GithubInputUser(props) {
  let showResult = null;
  if (props.flag) {
    showResult = <GithubTable result={props.showResult} />;
  }
  return (
    <div className="container-fluid">
      <form>
        <div className="row">
          <div className="col-3">
            <input
              type="text"
              className="rounded py-1 pl-3 ml-5 mt-1"
              placeholder="Enter Repository Name"
              value={props.value}
              onChange={props.changed}
            />
          </div>
          <div className="col-2">
            <a
              className="px-3 py-2 btn-dark btn text-white"
              onClick={props.click}
            >
              Enter
            </a>
          </div>
        </div>
      </form>
      {showResult}
    </div>
  );
}

export default GithubInputUser;
