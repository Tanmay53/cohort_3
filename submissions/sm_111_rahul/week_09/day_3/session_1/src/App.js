/** @format */

import React from "react";
import "./App.css";

const Navigation = props => {
  return (
    <div className="row bg-light text-dark">
      <div className="col">{props.children}</div>
    </div>
  );
};

const NavItem = props => {
  return <span className="float-right px-3 pt-2 h3">{props.label}</span>;
};

const SiteName = props => {
  return <span className="float-left h2">{props.children}</span>;
};

function DrawerItem(props) {
  return (
    <div>
      <p>
        <img className="p-2 mx-3" src={props.icon}></img>
        <span className="mx-4">{props.label}</span>
      </p>
    </div>
  );
}

function Drawer(props) {
  return (
    <div className="row d-flex ">
      <div className="col-sm-3 col-md-3 col-lg-2 bg-light text-dark mx-3 p-2">
        {props.children}
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="row">
      <div className="col">
        <Navigation>
          <SiteName>
            <NavItem label="Site name"></NavItem>
          </SiteName>
          <NavItem label="About us" />
          <NavItem label="Prices" />
          <NavItem label="Start page" />
          <NavItem label="Offer" />
          <NavItem label="Contact" />
        </Navigation>
        <Drawer>
          <DrawerItem
            label="Inbox"
            icon="https://img.icons8.com/material-outlined/24/000000/open-envelope.png"
          ></DrawerItem>
          <DrawerItem
            label="Sent mail"
            icon="https://img.icons8.com/material-outlined/24/000000/filled-sent.png"
          ></DrawerItem>
          <DrawerItem
            label="Drafts"
            icon="https://img.icons8.com/material-outlined/24/000000/database-mail.png"
          ></DrawerItem>
          <hr />
          <br></br>
          <DrawerItem
            label="Compose"
            icon="https://img.icons8.com/material-outlined/24/000000/filled-sent.png"
          ></DrawerItem>
          <DrawerItem
            label="All mail"
            icon="https://img.icons8.com/material-outlined/24/000000/database-mail.png"
          ></DrawerItem>
          <DrawerItem
            label="Trash"
            icon="https://img.icons8.com/material-outlined/24/000000/waste.png"
          ></DrawerItem>
        </Drawer>
      </div>
    </div>
  );
}
export default App;
