import React from "react";
import Drawer from "./component/Drawer";
import ToolBar from "./component/ToolBar";
import SiteName from "./component/SiteName";
import DrawerItem from "./component/DrawerItem";

import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3 bg-light vh-100 ">
          <Drawer className="">
            <h5>
              <i
                className="fa fa-inbox float-left p-2"
                style={{ marginTop: "2px" }}
              ></i>
              <DrawerItem label="Inbox" />
            </h5>
            <h5>
              <i
                className="fa fa-star float-left p-2"
                style={{ marginTop: "2px" }}
              ></i>
              <DrawerItem label="Starred" />
            </h5>
            <h5>
              <i
                className="fa fa-share float-left p-2"
                style={{ marginTop: "2px" }}
              ></i>
              <DrawerItem label="Send email" />
            </h5>
            <h5>
              <i
                className="fa fa-envelope float-left p-2"
                style={{ marginTop: "2px" }}
              ></i>
              <DrawerItem label="Drafts" />
            </h5>
            <hr />
            <h5>
              <i
                className="fa fa-envelope-o float-left p-2"
                style={{ marginTop: "2px" }}
              ></i>
              <DrawerItem label="All Mails" />
            </h5>
            <h5>
              <i
                className="fa fa-trash float-left p-2"
                style={{ marginTop: "2px" }}
              ></i>
              <DrawerItem label="Trash" />
            </h5>
          </Drawer>
        </div>
        <div className="col-lg-10 col-md-9">
          <ToolBar>
            <SiteName>
              <DrawerItem label="Amit Kumar" />
            </SiteName>
            <div className="w-100">
              <ul className="navbar-nav float-right">
                <DrawerItem label="About us" />
                <DrawerItem label="Prices" />
                <DrawerItem label="Start Page" />
                <DrawerItem label="Offer" />
                <DrawerItem label="Contact" />
              </ul>
            </div>
          </ToolBar>
        </div>
      </div>
    </div>
  );
}

export default App;
