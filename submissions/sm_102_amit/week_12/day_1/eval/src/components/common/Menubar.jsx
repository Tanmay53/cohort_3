import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Menubar = props => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="nav-link">
        <Link to="/" className="nav-link h1 text-white">
          VMS
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item as="li">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/add-vehicle" className="nav-link">
              Add Vehicle
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/vehicle-list" className="nav-link">
              Vehicle List
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
