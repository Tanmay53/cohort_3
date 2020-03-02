import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import CreateBook from "./components/CreateBook";

function App() {
  return (
    <div className="App">
      <Link to="/create">Create Book</Link>
      <Route path="/create" component={CreateBook}></Route>
    </div>
  );
}

export default App;
