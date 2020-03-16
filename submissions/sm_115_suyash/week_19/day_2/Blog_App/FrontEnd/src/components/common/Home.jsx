import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userAuth } from "../../redux/loginAction";

const Home = ({ userAuth, authData }) => {
  useEffect(() => {
    let tokken = localStorage.getItem("tokken");
    userAuth(tokken);
  });
  console.log(authData, "<-----HOme");
  return (
    <div className="text-center">
      <h1 className="mt-5">User Dashboard</h1>
    </div>
  );
};
const mapStateToProps = state => ({
  authData: state.authData
});

const mapDispatchToProps = {
  userAuth: userAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
