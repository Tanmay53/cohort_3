import React from "react";
import { Redirect } from "react-router-dom";

function SignIn(props) {
  if (props.isAuth) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <h2>Sign in</h2>
        {/* sign in form  */}
        <div className="col-md-5 offset-2">
          <div className="form-group">
            <label>
              Enter Name
              <input className="form-control" />
            </label>
            <label>
              Enter Password
              <input className="form-control" />
            </label>
            <button onClick={props.submit} className="btn btn-info">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
