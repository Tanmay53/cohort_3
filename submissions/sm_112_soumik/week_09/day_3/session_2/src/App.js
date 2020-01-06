import React from "react";
import "./App.css";

const Drawer = props => <div>{props.children}</div>;
const DrawerItem = props => {
  return (
    <li class="nav-item">
      <a class="nav-link active" href="#">
        <p className="text-lead">
          <span className="text-dark">{props.icon}</span>
          {props.label}
        </p>
      </a>
    </li>
  );
};

function App() {
  return (
    <Drawer>
      <div>
        <ul class="nav flex-column">
          <DrawerItem icon={<i class="fas fa-2x fa-inbox"></i>} label="Inbox" />
          <DrawerItem
            icon={<i class="fas fa-2x fa-mail-bulk"></i>}
            label="Starred"
          />
          <DrawerItem
            icon={<i class="fas fa-2x fa-share-square"></i>}
            label="Send Mail"
          />
          <DrawerItem
            icon={<i class="fas fa-2x fa-envelope"></i>}
            label="Draft"
          />
        </ul>
      </div>
    </Drawer>
  );
}
export default App;
