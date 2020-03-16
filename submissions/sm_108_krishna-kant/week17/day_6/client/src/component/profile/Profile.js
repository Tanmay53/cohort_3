import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

export default function Profile() {
  const [state, setState] = useState({
    user: {},
    error: ""
  });

  const { user, error } = state;

  useEffect(() => {
    fetchUser();
  }, []);

  const submitImage = async e => {
    let picture = document.getElementById("picture");
    console.log(picture.files);
    e.preventDefault();
  };

  const fetchUser = async () => {
    let user = await axios(
      "/auth/details",
      "GET",
      {},
      {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    );
    setState({ ...state, user: user.data });
  };

  return (
    <div className="row">
      <div className="col-lg-6 col-md-8 col-sm-12 p-2 offset-lg-3 offset-md-2 pt-5">
        <div className="card">
          <ul className="list-group">
            <li className="list-group-item">
              {user.profile ? (
                <img src={user.profile} />
              ) : (
                <form onSubmit={submitImage} encType="multipart/form-data">
                  <input type="file" name="picture" id="picture" />
                  <input
                    type="submit"
                    value="Upload"
                    className="btn btn-primary"
                  />
                </form>
              )}
            </li>
            <li className="list-group-item">ID: {user.id}</li>
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">Email : {user.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
