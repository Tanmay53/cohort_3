import React from "react";
import DrawerMenu from "./component/DrawerMenu";
import ToolBar from "./component/ToolBar";
import SiteName from "./component/SiteName";
import DrawerItem from "./component/DrawerItem";

import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3"></div>
        <div className="col-lg-10 col-md-9">
          <ToolBar>
            <SiteName>
              <DrawerItem label="SITENAME" />
            </SiteName>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <DrawerItem label="About us" />
                <DrawerItem label="Prices" />
                <DrawerItem label="Other" />
              </ul>
            </div>
          </ToolBar>
        </div>
      </div>
    </div>
  );
}

export default App;
