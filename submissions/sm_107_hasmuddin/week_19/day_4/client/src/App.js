import React from "react";
import "./App.css";
import Navbar from "./components/Home/Navbar"
import Dashboard from "./components/Home/Dashboard"
import PublishNew from "./components/Publish/PublishNew"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/publish" component={PublishNew} />
      </Switch>
    </Router >
  )
}


export default App
