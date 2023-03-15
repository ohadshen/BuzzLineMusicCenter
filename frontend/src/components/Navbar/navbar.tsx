import React from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import CheckoutNavButton from "../CheckoutNavButton";
import "./navbar.css";
const AppNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar variant="dark" className="navbar">
      <Navbar.Brand href="/" className="brand">
        BuzzLine
      </Navbar.Brand>
      <CheckoutNavButton
        onClick={() => {
          navigate("/checkout");
        }}
      />
    </Navbar>
  );
};

export default AppNavbar;
