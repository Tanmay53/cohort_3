import React, { useEffect } from "react";
import connect from "react-redux";
import { userAuth } from "../../redux/action";

const Home = ({ userAuth }) => {
  useEffect(() => {
    let tokken = localStorage.getItem("tokken");
    userAuth(tokken);
  });
  return (
    <div className="text-center">
      <h1 className="mt-5">User Dashboard</h1>
    </div>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  userAuth: userAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
