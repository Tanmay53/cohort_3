import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Menubar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">D22 D2 Evaluation</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item as="li">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/add-product" className="nav-link">
              Add Product
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/add-category" className="nav-link">
              Add Category
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/signup" className="nav-link">
              SignUp
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Menubar;
