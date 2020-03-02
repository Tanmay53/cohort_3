import React from "react";
import { Switch, Route } from "react-router-dom";
import Menubar from "./component/Common/Menubar";

import Home from "./component/Home/Home";
import NotFound from "./component/Error/NotFound";

function App() {
  return (
    <>
      <Menubar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
