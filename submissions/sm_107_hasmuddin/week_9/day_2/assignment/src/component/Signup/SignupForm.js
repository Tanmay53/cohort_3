import React from "react";

export default function SignupForm() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center p-5">
      <div className="col-6 p-3">
        <label htmlFor="username" className="m-2">
          Username
        </label>
        <input type="text" className="form-control m-2" />
        <label htmlFor="username" className="m-2">
          Password
        </label>

        <input type="password" className="form-control m-2" />
        <label htmlFor="username" className="m-2">
          Confirm password
        </label>

        <input type="text" className="form-control m-2" />
      </div>
      <input type="submit" className="btn btn-danger m-2" value="Signup" />
    </div>
  );
}
