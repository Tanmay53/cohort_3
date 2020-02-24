import React from "react";
import { connect } from "react-redux";
import { reset } from "../../redux/action";

function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Protected</h2>
      <button className="btn btn-primary" onClick={() => props.reset()}>
        Logout
      </button>
    </div>
  );
}

export default connect(null, { reset })(Home);
