import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="dark text-light mt-5 p-4">
        <div className="container d-flex">
          <div className="col-5">© 2019 Uber Technologies Inc.</div>
          <div className="col-1">Privacy</div>
          <div className="col-2 text-center">Accessibility</div>
          <div className="col-1">Terms</div>
          <div className="col text-right">
            <img src="./social.png"></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
