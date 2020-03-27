import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Routes} />
  </BrowserRouter>
  )
}

export default App;