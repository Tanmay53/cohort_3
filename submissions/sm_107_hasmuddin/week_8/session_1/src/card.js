import React from "react";

function Card() {
  return (
    <div>
      <div className="container bg-dark text-center p-5">
        <div className="text-white">
          <div className="col-12 shadow flex-d">
            <div className="col-8">
              <img
                className="img-fluid rounded-circle border border-info p-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGiS_rL46SaUVooi6PMDFBW3CNMFcwSE7BsOyJlxgTqybQ4Sg&s"
              ></img>
              <h1>Ricky Park</h1>
              <h2>New York</h2>
              <p>User interface designer and front and Developer</p>
              {/* buttons */}
              <div className="form-row">
                <div className="col-5">
                  <button className="btn btn-info">Message</button>
                </div>
                <div className="col-5">
                  <button className="btn btn-outline-info mx-3">
                    following
                  </button>
                </div>
              </div>
              {/* experience/ */}
              <h2>SKILLS</h2>
              <div className="col-12">
                <div className="row">
                  <p className="border border-white p-2 mx-1">UI / UX</p>
                  <p className="border border-white p-2 mx-1">
                    FrontEnd Developer
                  </p>
                  <p className="border border-white p-2 mx-1">HTML</p>
                  <p className="border border-white p-2 mx-1">CSS</p>
                  <p className="border border-white p-2 mx-1">Javascript</p>
                  <p className="border border-white p-2 mx-1">React</p>
                  <p className="border border-white p-2 mx-1">Node</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
