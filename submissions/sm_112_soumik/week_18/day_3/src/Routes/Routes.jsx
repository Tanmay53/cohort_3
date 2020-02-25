import React, { useContext } from "react";
import { Link, Switch, Route, __RouterContext } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { useTransition, animated } from "react-spring";

function Routes() {
  const { location } = useContext(__RouterContext);

  const transtions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%,0)" },
    enter: { opacity: 1, transform: "translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(-50%,0)" }
  });
  return (
    <div className="text-center ">
      <Link to="/" className="text-center text-dark">
        Home
      </Link>
      {transtions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/signup" component={() => <Register />} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default Routes;
