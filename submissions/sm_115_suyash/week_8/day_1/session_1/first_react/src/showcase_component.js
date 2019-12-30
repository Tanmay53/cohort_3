import React from "react";

function Showcase() {
  return (
    <div class="showcase container-fluid">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 my-5 h-100 rounded shadow-bg" id="col-bg-color">
          <div class="row">
            <div class="col-3 text-center">
              <p class="py-1 px-2 bg-warning block ml-5 mt-5 w-80 rounded">
                PRO
              </p>
            </div>
            <div class="col-6 text-center text-muted">
              <div class="pt-5">
                <img
                  class="rounded-circle border border-info p-2"
                  src="./girl.jpg"
                  alt=""
                  height="70%"
                />
              </div>
              <h2 class="pt-3">Ricky Prrk</h2>
              <h5 class="pt-2">NEW YORK</h5>
              <p class="lead font-italic">
                User interface designer and <br />
                front-end developer
              </p>
            </div>
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-6 border"></div>
            <div class="col-3"></div>
            <div class="col-2"></div>
            <div class="col-8 mt-4 text-center">
              <a href="#" class="btn px-5 py-3 lead mr-1 bg-info myBlue">
                Message
              </a>
              <a
                href="#"
                class="btn px-5 py-3 lead border border-info text-info"
              >
                Following
              </a>
            </div>
          </div>
          <div class="row row-bg-color mt-5 pt-1 pb-5">
            <div class="col-12 text-muted">
              <p class="pt-4 mb-2">SKILLS</p>
              <a
                href="#"
                class="btn px-4 mr-2 mb-2 border border-muted m-0 lead mr-1 text-muted"
              >
                UX/UI
              </a>
              <a
                href="#"
                class="btn px-4 mx-2 mb-2 border border-muted m-0 lead mr-1 text-muted"
              >
                Front End Developer
              </a>
              <a
                href="#"
                class="btn px-4 mx-2 mb-2 border border-muted m-0 lead mr-1 text-muted"
              >
                HTML
              </a>
              <a
                href="#"
                class="btn px-4 mx-4  mb-2 border border-muted m-0 lead mr-1 text-muted"
              >
                CSS
              </a>
              <a
                href="#"
                class="btn px-4 mx-r border border-muted m-0 lead mr-1 text-muted"
              >
                JavaScript
              </a>
              <a
                href="#"
                class="btn px-4 mx-4 border border-muted m-0 lead mr-1 text-muted"
              >
                React
              </a>
              <a
                href="#"
                class="btn px-4 mx-4 border border-muted m-0 lead mr-1 text-muted"
              >
                Node
              </a>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  );
}

export default Showcase;
