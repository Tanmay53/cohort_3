import React from "react";

function Btn() {
  return (
    <div class="container-fluid pt-4">
      <div class="row">
        <div class="col-4">
          <div class="row">
            <div class="col-6">
              <a
                href="#"
                class="btn w-100 text-white bg-info py-2 px-5 rounded-pill mb-3"
              >
                Join us
              </a>
              <a
                href="#"
                class="btn w-100 text-white bg-warning py-2 px-5 rounded-pill mb-3"
              >
                Login
              </a>
              <a
                href="#"
                class="btn w-100 text-white bg-success py-2 px-5 rounded-pill mb-3"
              >
                Search
              </a>
              <a
                href="#"
                class="btn w-100 text-white bg-secondary py-2 px-5 rounded-pill mb-3"
              >
                Home
              </a>
            </div>
            <div class="col-6">
              <a
                href="#"
                class="btn w-100 text-white bg-dark py-2 px-5 rounded-pill mb-3"
              >
                Settings
              </a>
              <a
                href="#"
                class="btn w-100 text-white bg-danger py-2 px-5 rounded-pill mb-3"
              >
                Contact us
              </a>
              <a
                href="#"
                class="btn w-100 text-white bg-info py-2 px-5 rounded-pill mb-3"
              >
                Help
              </a>
              <a
                href="#"
                class="btn w-100 text-white bg-success py-2 px-5 rounded-pill mb-3"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Btn;
