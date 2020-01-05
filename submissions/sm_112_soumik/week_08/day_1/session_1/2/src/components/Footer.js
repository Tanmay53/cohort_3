import React from "react";

function Footer() {
  return (
    <div className="container pt-2" id="footer">
      <p className="muted">Skills</p>
      <div className="row text-center">
        <div className="col-md-12 row">
          <div className="col-md-2">
            <p>UI/UX</p>
          </div>
          <div className="col-md-8">
            <p>Front End Development</p>
          </div>
          <div className="col-md-2">
            <p>HTML</p>
          </div>
        </div>
        <div className="col-md-12 row text-center">
          <div className="col-md-2">
            <p>CSS</p>
          </div>
          <div className="col-md-4">
            <p>Java Script</p>
          </div>
          <div className="col-md-3">
            <p>React</p>
          </div>
          <div className="col-md-3">Node</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
