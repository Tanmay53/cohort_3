import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
