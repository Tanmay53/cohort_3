import React from "react";

function Card(){
    return(
        <div className="container bg-info mb-5 p-5 mt-5">
        <div className="col-6 mx-auto">
          <div className="card bg-light shadow shadow-lg">
            <div className="row mt-3">
              <p
                className="badge-pill bg-warning ml-4"
                style={{ height: "50px" }}
              >
                PRO
              </p>
              <img
                src="guy.jpeg"
                className="ml-5 mt-3 rounded-circle"
                width="200px"
                height="200px"
              />
            </div>
            <div className="text-center mt-3">Ricky Park</div>
            <div className="text-center mt-1 small">NEW YORK</div>
            <div className="text-center mt-1 col-8 mx-auto">
              User interface designer and front-end developer
            </div>
            <div className="row mt-3">
              <button className="col-4 btn btn-primary ml-auto">Message</button>
              <button className="col-4 btn btn-primary ml-2 mr-auto">
                Following
              </button>
            </div>
            <div className="card-body small bg-primary mt-3 text-light">
              <p className="card-text">Skills</p>
              <div className="row mb-1">
                <p class="card-text border rounded p-1 pl-3 pr-3 ml-1">UI/UX</p>
                <p class="card-text border rounded p-1 pl-3 pr-3 ml-2">
                  Front End Development
                </p>
                <p class="card-text border rounded p-1 pl-3 pr-3 ml-2">HTML</p>
                <p></p>
              </div>
              <div className="row">
                <p class="card-text border rounded p-1 pl-3 pr-3 ml-1 mb-0">
                  CSS
                </p>
                <p class="card-text border rounded p-1 pl-3 pr-3 ml-2 mb-0">
                  Javascript
                </p>
                <p class="card-text border rounded p-1 pl-3 pr-3 ml-2 mb-0">
                  React
                </p>
                <p class="card-text border rounded p-1 pl-3 pr-3 ml-2 mb-0">
                  Node
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Card;
