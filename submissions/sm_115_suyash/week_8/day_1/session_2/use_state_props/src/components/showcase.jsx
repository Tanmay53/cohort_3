import React from "react";

function showcase(props) {
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
              <h2 class="pt-3">{props.name}</h2>
              <h5 class="pt-2">{props.loc}</h5>
              <p class="lead font-italic">{props.des}</p>
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
                {props.skill[0]}
              </a>
              <a
                href="#"
                class="btn px-4 mx-2 mb-2 border border-muted m-0 lead mr-1 text-muted"
              >
                {props.skill[1]}
              </a>
              <a
                href="#"
                class="btn px-4 mx-2 mb-2 border border-muted m-0 lead mr-1 text-muted"
              >
                {props.skill[2]}
              </a>
              <a
                href="#"
                class="btn px-4 mx-4  mb-2 border border-muted m-0 lead mr-1 text-muted"
              >
                {props.skill[3]}
              </a>
              <a
                href="#"
                class="btn px-4 mx-r border border-muted m-0 lead mr-1 text-muted"
              >
                {props.skill[4]}
              </a>
              <a
                href="#"
                class="btn px-4 mx-4 border border-muted m-0 lead mr-1 text-muted"
              >
                {props.skill[5]}
              </a>
              <a
                href="#"
                class="btn px-4 mx-4 border border-muted m-0 lead mr-1 text-muted"
              >
                {props.skill[6]}
              </a>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  );
}
export default showcase;
