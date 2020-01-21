import React from "react";

function SignUp() {
  return (
    <div className="container" style={{ width: "60rem" }}>
      <div className="row">
        <div className="col-4 offset-5">
          <h1></h1>
          <form className="w-100">
            <div className="form-group">
              <label for="inputEmail4">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label for="inputPassword4">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
              <label for="lname">User Name</label>
              <input type="text" className="form-control" id="user-name" />
            </div>
            <div className="form-group pb-1">
              <label for="lname">Phone Number</label>
              <input type="number" className="form-control" id="number" />
            </div>
            <div className="form-group">
              <select
                id="select-box"
                className="py-2 w-100 bg-white border rounded"
              >
                <option value="">Select Type</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-dark btn-block"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
