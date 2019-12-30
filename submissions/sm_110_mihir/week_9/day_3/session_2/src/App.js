import React from "react";
import styles from "./child.module.css";
import "./App.css";

const DrawerItem = props => {
    return (
        <li className="nav-item p-2 ml-2">
            <i class={props.icon}></i>
            {props.label}
        </li>
    );
};
const Drawer = ({ children }) => {
    return <ul className="nav flex-column">{children}</ul>;
};

const ToolBar = ({ children }) => {
    return (
        <div className="container-fluid bg-primary">
            <div className="container">
                <ul className="nav d-flex justify-content-between  p-2 text-white bd-highlight mb-3">
                    {children}
                </ul>
            </div>
        </div>
    );
};
const SiteName = ({ children }) => (
    <span className="font-weight-bold">{children}</span>
);
function App() {
    return (
        <React.Fragment>
            <ToolBar>
                <SiteName className="w-100">
                    <DrawerItem label="SITENAME" />
                </SiteName>
                <div className="d-flex justify-content-around">
                    <DrawerItem label="About us" />
                    <DrawerItem label="Prices" />
                    <DrawerItem label="Other" />
                </div>
            </ToolBar>

            <Drawer>
                <DrawerItem label="Inbox" icon="fas fa-inbox" />
                <DrawerItem label="Starred" icon="fas fa-envelope-square" />
                <DrawerItem label="Send email" icon="fas fa-envelope-square" />
                <DrawerItem label="Drafts" icon="fas fa-inbox" />
            </Drawer>
        </React.Fragment>
    );
}

export default App;
