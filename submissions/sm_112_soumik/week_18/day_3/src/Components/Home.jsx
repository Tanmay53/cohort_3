import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [login, setlogin] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  });
  useEffect(() => {
    let status = localStorage.getItem("isLoggedIn");
    if (status == "true") {
      setlogin(true);
      let token = JSON.parse(localStorage.getItem("token"));
      let data = {};
      axios
        .post("http://localhost:5000/auth/details", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`
          }
        })
        .then(res => setUser(res.data));
    } else {
      setlogin(false);
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem("isLoggedIn", JSON.parse(false));
    setlogin(false);
    setUser({
      name: "",
      email: "",
      password: ""
    });
    localStorage.removeItem("token");
  };
  return (
    <div className="position-absolute w-100">
      <h2 className="bg-warning">Dashboard</h2>
      <hr />
      <div className="row">
        {login ? (
          <button className="btn btn-danger m-auto" onClick={handleClick}>
            Log Out
          </button>
        ) : (
          <Link to="/login" className="m-auto">
            <button className="btn btn-success">Login</button>
          </Link>
        )}

        <Link to="/signup" className="m-auto">
          <button className="btn btn-info">Register New User</button>
        </Link>
      </div>
      {user.name.length ? (
        <>
          <h2>Welcome {user.name}</h2>
          <input type="file" placeholder="Upload image" />
        </>
      ) : (
        <div>
          <h2>Not Logged In</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
