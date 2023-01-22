import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
const AppNavbar = () => (
  <Navbar bg="secondary" variant="dark" className="navbar">
    <Navbar.Brand href="/" className="brand">
      BuzzLine
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={() => {}}>Home</Nav.Link>
    </Nav>
    <Nav className="me-auto">
      <Nav.Link onClick={() => {}}>Store</Nav.Link>
    </Nav>
  </Navbar>
);

export default AppNavbar;
