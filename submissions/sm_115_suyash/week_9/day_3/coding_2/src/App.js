import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Children from "./components/children/Children";
import Navbar from "./components/Navbar/Navbar";
import NavChild from "./components/Navbar/NavChild";
import NavChildLink from "./components/Navbar/NavChildLink";

function App() {
  return (
    <>
      <Navbar>
        <NavChild>
          <NavChildLink label="Instamozo" pth="/" />
        </NavChild>
        <NavChildLink label="About Us" pth="/about" />
        <NavChildLink label="Price" pth="price" />
        <NavChildLink label="Offer" pth="offer" />
        <NavChildLink label="Contact" pth="contact" />
      </Navbar>
      <Sidebar>
        <Children label="Home" icon="fas fa-inbox" comp="Home" pth="/" />
        <Children
          label="Starred"
          icon="far fa-envelope"
          comp="Starred"
          pth="/starred"
        />
        <Children
          label="Send email"
          icon="fas fa-inbox"
          comp="SendEmail"
          pth="/sendemail"
        />
        <Children
          label="Drafts"
          icon="far fa-envelope"
          comp="Drafts"
          pth="/drafts"
        />
        <hr />
        <Children
          label="All mail"
          icon="fas fa-inbox"
          comp="AllMail"
          pth="/allmail"
        />
        <Children
          label="Trash"
          icon="far fa-envelope"
          comp="Trash"
          pth="/trash"
        />
      </Sidebar>
    </>
  );
}

export default App;
