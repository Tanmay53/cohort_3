import React, { useContext, useState, useEffect } from "react";
import { Link, Switch, Route, __RouterContext } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { useTransition, animated } from "react-spring";
import { connect } from "react-redux";
import NewBlog from "../Components/NewBlog";
import UserProfile from "../Components/UserProfile";
import { logout } from "../Redux/auth_action";

function Routes(props) {
  const { location } = useContext(__RouterContext);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let status = localStorage.getItem("isLoggedIn");
    status = JSON.parse(status);
    if (status == true) {
      setToggle(true);
    }
  }, [props.login]);

  const transtions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%,0)" },
    enter: { opacity: 1, transform: "translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(-50%,0)" }
  });
  const clickHandlerLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    props.logout();
    return setToggle(false);
  };
  return (
    <div className="text-center position-absolute ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            Your Feed
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classname="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/newpost" className="nav-link text-dark" href="#">
                  Add A New BLog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link text-dark" href="#">
                  Your Profile
                </Link>
              </li>
            </ul>
            {toggle ? (
              <button
                className="ml-auto btn btn-outline-danger"
                onClick={clickHandlerLogout}
              >
                Log Out
              </button>
            ) : (
              <Link to="/login" className="ml-auto btn btn-outline-info">
                Login/Signup
              </Link>
            )}
          </div>
        </div>
      </nav>
      {transtions.map(({ item, props, key }) => (
        <animated.div {...props} key={key} style={props}>
          <Switch>
            <Route exact path="/" component={props => <Home {...props} />} />
            <Route
              exact
              path="/login"
              component={props => <Login {...props} />}
            />
            <Route
              exact
              path="/signup"
              component={props => <Register {...props} />}
            />
            <Route
              exact
              path="/newpost"
              component={props => <NewBlog {...props} />}
            />
            <Route
              exact
              path="/profile"
              component={props => <UserProfile {...props} />}
            />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  login: state.auth
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout)
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
