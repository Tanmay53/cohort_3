import React from "react";
import "./Showcase.css";

function Showcase() {
  return (
    <div className="container-fluid img-con">
      <div className="row flex-column pt-5 pl-5">
        <h1 className="display-4 font-weight-bold pt-4">
          Slack replaces email <br /> inside your company
        </h1>
        <p className="h5 font-weight-normal pb-3">
          Keep conversations organised in Slack, the smart <br /> alternative to
          email.
        </p>
      </div>
      <a href="#" className="text-white btn my-bg py-3 px-5 ml-4">
        TRY SLACK
      </a>
      <a
        href="#"
        className="text-white my-text border-secondary py-3 px-5 btn ml-3"
      >
        SEE THE DEMO
      </a>
      <p className="mt-3 ml-4">
        <small>Already using Slack? </small>
        <a href="#">Sign in.</a>
      </p>
    </div>
  );
}

export default Showcase;
