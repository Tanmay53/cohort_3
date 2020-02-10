import React from "react";
import { Redirect } from "react-router-dom";
import { store } from "../../Redux/store";

function Home() {
  const isAuth = store.getState().auth.isAuth;
  console.log("my state is", isAuth);
  if (isAuth) {
    return (
      <div>
        <h2 className="text-center text-success">Logged In</h2>
      </div>
    );
  } else {
    return (
      <h2>
        <Redirect to="/login" />
      </h2>
    );
  }
}

export default Home;
