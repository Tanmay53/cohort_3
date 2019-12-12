import React from "react";

var btnArr = [
  "JOIN US",
  "SETTINGS",
  "LOGIN",
  "CONTACT US",
  "SEARCH",
  "HELP",
  "HOME",
  "DOWNLOAD"
];

function Buttons() {
  return (
    <div className="container mt-5">
      <div className="form-inline mb-3">
        <div className="col-2">
          <button className="btn btn-info btn-block badge-pill">
            {btnArr[0]}
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-danger btn-block badge-pill">
            {btnArr[1]}
          </button>
        </div>
      </div>

      <div className="form-inline mb-3">
        <div className="col-2">
          <button className="btn btn-success btn-block badge-pill">
            {btnArr[2]}
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-warning btn-block badge-pill">
            {btnArr[3]}
          </button>
        </div>
      </div>

      <div className="form-inline mb-3">
        <div className="col-2">
          <button className="btn btn-secondary btn-block badge-pill">
            {btnArr[4]}
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-dark btn-block badge-pill">
            {btnArr[5]}
          </button>
        </div>
      </div>

      <div className="form-inline mb-3">
        <div className="col-2">
          <button className="btn btn-primary btn-block badge-pill">
            {btnArr[6]}
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-success btn-block badge-pill">
            {btnArr[7]}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Buttons;
