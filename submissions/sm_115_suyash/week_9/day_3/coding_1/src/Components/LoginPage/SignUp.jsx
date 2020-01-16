import React from "react";
import { Redirect } from "react-router-dom";

function SignUp(props) {
  if (props.toggle) {
    return <Redirect to="/surface" />;
  } else {
    return (
      <div style={{ width: "95vw", margin: "2rem 0" }}>
        <div className="w-50 py-5 m-auto shadow-lg rounded">
          <p className="display-4 text-center">Login Page</p>
          <form>
            <div className="form-row my-5">
              <div className="form-group col-md-6 offset-3">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email is 'suyashmishra143143@gmail'"
                  className="form-control"
                  // value={this.state.email}
                  // onChange={props.clicked}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password is 'samMas@882'"
                  className="form-control"
                  // value={this.state.pass}
                  // onChange={e => this.passHandler(e)}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <button
                  type="submit"
                  className="btn btn-dark w-100"
                  onClick={props.clicked}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
